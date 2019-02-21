import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Reservation } from 'src/app/models/reservation';
import { User } from 'src/app/models/user';
import { Table } from 'src/app/models/table';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [UserService]
})
export class ReservationComponent implements OnInit {

  tables: Array<Table>;
  reservas: Array<Reservation>
  users: Array<User>
  disponible: Array<Number>
  open: boolean = false;
  i: number=0;
  cont:number=0;

  input_id:string;
  inputId:string;
  inputIduser:string;
  inputNumbertable:number;
  inputHourbegin:number;


  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.verifyAdmin();
    this.getReservations();
    this.getUsers();
    this.getTables();
  }

  ingresarReservacion(){

    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
      let sz = this.userService.reservations.length;

      let reserva = new Reservation()
      
      if (localStorage.getItem("edit") == "1"){
        reserva._id = this.input_id;
        let next = this.inputId;
        console.log(next)
        reserva.idReservation = next;
        console.log(reserva.idReservation)
      } else {
        let next = res[sz-1].idReservation + 1;
        reserva.idReservation = next;
      }

      localStorage.setItem("edit","0");
      
      reserva.idUser = this.inputIduser;
      reserva.numberTable = this.inputNumbertable;
      reserva.hourBegin =this.inputHourbegin;


      console.log(reserva);

      this.addReservation(reserva);

      this.userService.getReservations().subscribe(res=>{
        this.userService.reservations = res as Reservation[];});
    })

  }

  getTables(){
    this.userService.getTables().subscribe(res=>{
      this.userService.tables = res as Table[];

      this.tables = []
      let sz = this.userService.tables.length;
      for (let i = 0; i < sz; i++) {
        this.tables.push(new Table(res[i]._id, res[i].idTable, res[i].numberChair,res[i].description,res[i].state));
      }
      console.log(this.tables)
    })
  }

  
  changingValue(event){
    console.log(event.target.selectedIndex);
    localStorage.setItem("mesaSeleccionada", event.target.selectedIndex)
    this.open = true;
    this.getReservas()
  }
  verifyAdmin(){
    if (localStorage.getItem("verify") != "1"){
      this.router.navigate(["login"]);
    }
  }
  addReservation(reserva: Reservation){
    if(reserva._id){
      console.log("ingresó aquí")
      this.userService.putReservation(reserva).subscribe(res =>{

        M.toast({html: 'Actualizado Satisfactoriamente'});
  
        this.getReservations();
      })
    }else{

      this.userService.postReservation(reserva).subscribe(res => {
        console.log(reserva);

      M.toast({html: 'Guardado Satisfactoriamente'});

      this.getReservations();
    });
  }
  }

  editReservation(reserva: Reservation){
    console.log(reserva)
    this.input_id = reserva._id;
    this.inputId = String(reserva.idReservation);
    this.inputIduser = reserva.idUser;
    this.inputNumbertable = reserva.numberTable;
    this.inputHourbegin = Number(reserva.hourBegin);

  localStorage.setItem("edit","1");
  }

  deleteReservation(_id: string){
      if(confirm('Are you sure?')){
        this.userService.deleteReservation(_id).subscribe (res => {

        this.getReservations();
        M.toast({html: 'Eliminado Satisfactoriamente'});
      });
    }

  }

  getReservations(){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
    })
  }

  getReservas(){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
      this.reservas = []
      this.disponible = []
      let sz = this.userService.reservations.length;
      for (let i = 0; i < sz; i++) {
        try {
          if (res[localStorage.getItem("mesaSeleccionada")].numberTable == res[i].numberTable){
            this.reservas.push(new Reservation(res[i]._id, res[i].idReservation, res[i].idUser,res[i].numberTable,res[i].hourBegin));
          }
        } catch (error) {
          
        }
        
      }
      for (this.i =1; this.i<25; this.i++){
        for (let j = 0; j<this.reservas.length;j++){
          if (this.i == this.reservas[j].hourBegin){
            this.cont++;
          }
        }

        if(this.cont == 0){
          this.disponible.push(this.i)
          
        }
        this.cont = 0;
        
      }
      console.log(this.reservas)


    })
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.userService.users = res as User[];

      this.users = []
      let sz = this.userService.users.length;
      for (let i = 0; i < sz; i++) {
        this.users.push(new User(res[i]._id, res[i].idUser, res[i].name,res[i].lastname,res[i].email, res[i].password,res[i].type));
      }
      console.log(this.users)
    })
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.selectedReservation = new Reservation();
    }
  }
}
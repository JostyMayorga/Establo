import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Table } from 'src/app/models/table';
import { Router } from '@angular/router';
import { Reservation } from 'src/app/models/reservation';

declare var M: any;

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  nombreUsuario: string = localStorage.getItem("nameUsuarioActual");
  tables: Array<Table>;
  reservas: Array<Reservation>
  disponible: Array<Number>
  i: number=0;
  cont:number=0;

  input_id:string;
  inputId:string;
  inputIduser:string;
  inputNumbertable:number;
  inputHourbegin:number;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.getTables()
  }

  ingresarReserva(numTable){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
      let sz = this.userService.reservations.length;

      let reserva = new Reservation()
      

        let next = res[sz-1].idReservation + 1;
        reserva.idReservation = next;


      localStorage.setItem("edit","0");
      
      reserva.idUser = localStorage.getItem("idUsuarioActual");
      reserva.numberTable = numTable;
      reserva.hourBegin =this.inputHourbegin;


      console.log(reserva);

      this.addReservation(reserva);

      this.userService.getReservations().subscribe(res=>{
        this.userService.reservations = res as Reservation[];});
    })
  }

  addReservation(reserva: Reservation){

      this.userService.postReservation(reserva).subscribe(res => {
        console.log(reserva);

      M.toast({html: 'Guardado Satisfactoriamente'});

      this.getReservations();
    });
  }
  
  getReservations(){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
    })
  }


  cargarReservas(numTable){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
      this.reservas = []
      this.disponible = []
      let sz = this.userService.reservations.length;
      for (let i = 0; i < sz; i++) {

          if (numTable == res[i].numberTable){
            this.reservas.push(new Reservation(res[i]._id, res[i].idReservation, res[i].idUser,res[i].numberTable,res[i].hourBegin));
            console.log(this.reservas)
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

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Table } from 'src/app/models/table';
import { User } from 'src/app/models/user';
import { Reservation } from 'src/app/models/reservation';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-adminlocal',
  templateUrl: './adminlocal.component.html',
  styleUrls: ['./adminlocal.component.css'],
  providers: [UserService]
})
export class AdminlocalComponent implements OnInit {

  next: number;
  reservas: Array<Reservation>

  input_id:string;
  inputId:string;
  inputStatus:string;
  inputNumberChair:number;
  inputDescription:number;


  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.getTables();
    this.getUsers();
  }

  changeStatus(){
    this.userService.getTables().subscribe(res=>{
      this.userService.tables = res as Table[];


    this.input_id = res[Number(localStorage.getItem("mesaSeleccionada"))-1]._id;
    this.inputId = res[Number(localStorage.getItem("mesaSeleccionada"))-1].idTable;
    this.inputNumberChair = res[Number(localStorage.getItem("mesaSeleccionada"))-1].numberChair;
    this.inputDescription = res[Number(localStorage.getItem("mesaSeleccionada"))-1].description;

    let mesa = new Table()

    mesa._id = this.input_id;
    mesa.idTable = Number(this.inputId);
    mesa.numberChair = this.inputNumberChair;
    mesa.description = String(this.inputDescription);
    mesa.state = this.inputStatus;
      console.log(mesa)
    this.addTable(mesa);
    })
  }

  addTable(mesa: Table){
    if(mesa._id){
      console.log("ingresó aquí")
      this.userService.putTable(mesa).subscribe(res =>{

        M.toast({html: 'Actualizado Satisfactoriamente'});
  
        this.getTables();
      })
    }else{

      this.userService.postTable(mesa).subscribe(res => {
        console.log(mesa);

      M.toast({html: 'Guardado Satisfactoriamente'});

      this.getTables();
    });
  }
  }

  changingValue(event){
    console.log(event.target.selectedIndex);
    localStorage.setItem("mesaSeleccionada", (event.target.selectedIndex + 1))
    console.log(localStorage.getItem("mesaSeleccionada"))
    this.getReservas()
  }

  getReservas(){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
      this.reservas = []
      let sz = this.userService.reservations.length;
      for (let i = 0; i < sz; i++) {

          if (localStorage.getItem("mesaSeleccionada") == res[i].numberTable){
            this.reservas.push(new Reservation(res[i]._id, res[i].idReservation, res[i].idUser,res[i].numberTable,res[i].hourBegin));
            console.log(this.reservas)
          }

        
      }})
  }

  getTables(){
    this.userService.getTables().subscribe(res=>{
      this.userService.tables = res as Table[];
      let sz = this.userService.tables.length;
      this.next = res[sz-1].idTable + 1;
    })
  }
  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.userService.users = res as User[];
    })
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.selectedTable = new Table();
    }
  }

}

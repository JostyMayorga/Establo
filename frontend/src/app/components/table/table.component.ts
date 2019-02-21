import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Table } from 'src/app/models/table';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [UserService]
})
export class TableComponent implements OnInit {

  input_id:String;
  inputId:String;
  inputNumberchair:Number;
  inputDescription:String;
  inputStatus:Number;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.verifyAdmin();
    this.getTables();
  }

  verifyAdmin(){
    if (localStorage.getItem("verify") != "1"){
      this.router.navigate(["login"]);
    }
  }

  cerrarSesion(){
    localStorage.setItem("verify","0")
    this.router.navigate(["login"]);
  }

  ingresarMesa(){

    this.userService.getTables().subscribe(res=>{
      this.userService.tables = res as Table[];
      let sz = this.userService.tables.length;

      let mesa = new Table()
      
      if (localStorage.getItem("edit") == "1"){
        mesa._id = this.input_id;
        let next = this.inputId;
        mesa.idTable = Number(next);
      } else {
        let next = res[sz-1].idTable + 1;
        mesa.idTable = Number(next);
      }

      localStorage.setItem("edit","0");
      
      mesa.numberChair = this.inputNumberchair;
      mesa.description = this.inputDescription;
      mesa.state =String(this.inputStatus);


      console.log(mesa);

      this.addTable(mesa);

      this.userService.getTables().subscribe(res=>{
        this.userService.tables = res as Table[];});
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

  editTable(mesa: Table){
    console.log(mesa)
    this.input_id = mesa._id;
    this.inputId = String(mesa.idTable);
    this.inputNumberchair = mesa.numberChair;
    this.inputDescription = mesa.description;
    this.inputStatus = Number(mesa.state);

  localStorage.setItem("edit","1");
  }

  deleteTable(_id: string){
      if(confirm('Are you sure?')){
        this.userService.deleteTable(_id).subscribe (res => {

        this.getTables();
        M.toast({html: 'Eliminado Satisfactoriamente'});
      });
    }

  }

  getTables(){
    this.userService.getTables().subscribe(res=>{
      this.userService.tables = res as Table[];
      console.log(res)
    })
    
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.selectedTable = new Table();
    }
  }
}

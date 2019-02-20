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

  next: number;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.verifyAdmin();
    this.getTables();
    this.getUsers();
  }

  verifyAdmin(){
    if (localStorage.getItem("verify") != "1"){
      this.router.navigate(["login"]);
    }
  }

  numberA: number = 10;
  addTable(form: NgForm){
    if(form.value._id){
      this.userService.putTable(form.value).subscribe(res =>{
      this.resetForm(form);
      M.toast({html: 'Actualizado Satisfactoriamente'});
      this.getTables();
      })
    }else{

    this.userService.postTable(form.value).subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Guardado Satisfactoriamente'});
      this.getTables();
    });
  }
  }

  editTable(table: Table){

    this.userService.selectedTable = table;
    
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

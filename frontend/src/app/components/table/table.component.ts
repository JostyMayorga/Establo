import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Table } from 'src/app/models/table';
import { User } from 'src/app/models/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [UserService]
})
export class TableComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTables();
    this.getUsers();
  }

  addTable(form: NgForm){
    if(form.value._id){
      this.userService.putTable(form.value).subscribe(res =>{
        
      })
    }else{

    this.userService.postTable(form.value).subscribe(res => {
      this.resetForm(form);

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
        
      });
    }

  }

  getTables(){
    this.userService.getTables().subscribe(res=>{
      this.userService.tables = res as Table[];
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

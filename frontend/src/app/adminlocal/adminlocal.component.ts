import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Table } from 'src/app/models/table';
import { User } from 'src/app/models/user';
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

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.getTables();
    this.getUsers();
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

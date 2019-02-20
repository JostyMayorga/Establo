import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { Table } from 'src/app/models/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {


  tables: Array<Table>;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.getTables()
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

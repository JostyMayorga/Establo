import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  inputId:string;
  inputName:string;
  inputApellido:string;
  inputEmail:string;
  inputPassword:string;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
  }

  registrar(){

    this.userService.getUsers().subscribe(res=>{
      this.userService.users = res as User[];
      let sz = this.userService.users.length;
      let next = res[sz-1].idUser + 1

      let usuario = new User()
      usuario.idUser = next;
      usuario.name = this.inputName;
      usuario.lastName = this.inputApellido;
      usuario.email =this.inputEmail;
      usuario.password= this.inputPassword;
      usuario.type = 3;

      console.log(usuario);

      this.addUser(usuario);

      this.userService.getUsers().subscribe(res=>{
        this.userService.users = res as User[];});
    })

    

  }

  addUser(user: User){

    this.userService.postUser(user).subscribe(res => {
      console.log(user);
    });
  }
  

}

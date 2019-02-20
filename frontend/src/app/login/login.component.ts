import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  inputEmail:string;
  inputPassword:string;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
  }

  login(){
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.userService.users = res as User[];
      let sz = this.userService.users.length;
      
      for (let i=0;i<sz;i++){
        console.log(res[i])
        if (res[i].email == this.inputEmail && res[i].password == this.inputPassword && res[i].type==1){
          localStorage.setItem("verify", "1");
          this.router.navigate(["users"]);
        } else if (res[i].email == this.inputEmail && res[i].password == this.inputPassword && res[i].type==2){
          this.router.navigate(["adminlocal"]);
        } else if (res[i].email == this.inputEmail && res[i].password == this.inputPassword && res[i].type==3){
          
          this.router.navigate(["reserva"]);
        } else {
          console.log("Datos incorrectos")
        }
      }
      
    })
    
  }

}

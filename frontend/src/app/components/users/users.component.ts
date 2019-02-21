import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { User } from 'src/app/models/user';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

declare var M: any;
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {
  input_id:string;
  inputId:string;
  inputName:string;
  inputApellido:string;
  inputEmail:string;
  inputPassword:string;
  inputType:number;

  constructor(private userService: UserService, private router:Router ) { }

  ngOnInit() {
    this.verifyAdmin();
    this.getUsers();
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

  registrar(){

    this.userService.getUsers().subscribe(res=>{
      this.userService.users = res as User[];
      let sz = this.userService.users.length;

      let usuario = new User()
      
      if (localStorage.getItem("edit") == "1"){
        usuario._id = this.input_id;
        let next = this.inputId;
        usuario.idUser = next;
      } else {
        let next = res[sz-1].idUser + 1;
        usuario.idUser = next;
      }

      localStorage.setItem("edit","0");
      
      usuario.name = this.inputName;
      usuario.lastName = this.inputApellido;
      usuario.email =this.inputEmail;
      usuario.password= this.inputPassword;
      usuario.type = this.inputType;

      console.log(usuario);

      this.addUser(usuario);

      this.userService.getUsers().subscribe(res=>{
        this.userService.users = res as User[];});
    })

    

  }


  addUser(user: User){
    if(user._id){
      console.log("ingresó aquí")
      this.userService.putUser(user).subscribe(res =>{

        M.toast({html: 'Actualizado Satisfactoriamente'});
  
        this.getUsers();
      })
    }else{

      this.userService.postUser(user).subscribe(res => {
        console.log(user);

      M.toast({html: 'Guardado Satisfactoriamente'});

      this.getUsers();
    });
  }
  }

  editUser(user: User){
    console.log(user)
    this.input_id = user._id;
  this.inputId = user.idUser;
  this.inputName = user.name;
  this.inputApellido = user.lastName;
  this.inputEmail = user.email;
  this.inputPassword = user.password;
  this.inputType = user.type;

  localStorage.setItem("edit","1");
  }

  deleteUser(_id: string){
      if(confirm('Are you sure?')){
        this.userService.deleteUser(_id).subscribe (res => {

        this.getUsers();
        M.toast({html: 'Eliminado Satisfactoriamente'});
      });
    }

  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      this.userService.users = res as User[];
      console.log(res)
    })
    
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.selectedUser = new User();
    }
  }
}

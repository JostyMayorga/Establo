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

  addUser(form: NgForm){
    if(form.value._id){
      this.userService.putUser(form.value).subscribe(res =>{
        this.resetForm(form);

        M.toast({html: 'Actualizado Satisfactoriamente'});
  
        this.getUsers();
      })
    }else{

    this.userService.postUser(form.value).subscribe(res => {
      this.resetForm(form);

      M.toast({html: 'Guardado Satisfactoriamente'});

      this.getUsers();
    });
  }
  }

  editUser(user: User){

    this.userService.selectedUser = user;
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

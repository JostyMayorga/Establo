import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { Reservation } from 'src/app/models/reservation';
import { User } from 'src/app/models/user';
import {NgForm} from '@angular/forms';

declare var M: any;

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css'],
  providers: [UserService]
})
export class ReservationComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getReservations();
    this.getUsers();
  }

  addReservation(form: NgForm){
    if(form.value._id){
      this.userService.putReservation(form.value).subscribe(res =>{
        this.resetForm(form);
        M.toast({html: 'Actualizado Satisfactoriamente'});
        this.getReservations();
      })
    }else{

    this.userService.postReservation(form.value).subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Guardado Satisfactoriamente'});
      this.getReservations();
    });
  }
  }

  editReservation(reservation: Reservation){
    this.userService.selectedReservation = reservation;
  }

  deleteReservation(_id: string){
      if(confirm('Are you sure?')){
        this.userService.deleteReservation(_id).subscribe (res => {

        this.getReservations();
        M.toast({html: 'Eliminado Satisfactoriamente'});
      });
    }

  }

  getReservations(){
    this.userService.getReservations().subscribe(res=>{
      this.userService.reservations = res as Reservation[];
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
      this.userService.selectedReservation = new Reservation();
    }
  }
}

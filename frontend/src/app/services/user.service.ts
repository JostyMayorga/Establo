import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';
import { Reservation } from '../models/reservation';
import { Table } from '../models/table';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  selectedReservation: Reservation;
  selectedTable: Table;
  users: User[];
  reservations: Reservation[];
  tables: Table[];
  readonly URL_API = 'http://localhost:3000/api/users'
  readonly URL_API2 = 'http://localhost:3000/api/reservations'
  readonly URL_API3 = 'http://localhost:3000/api/tables'
  constructor(private http: HttpClient) {
    this.selectedUser = new User();
    this.selectedReservation = new Reservation();
    this.selectedTable = new Table();
  }

  getUsers(){
    return this.http.get(this.URL_API)
  }

  postUser(User: User){
    return this.http.post(this.URL_API, User);
  }

  putUser(User: User){
    return this.http.put(this.URL_API + `/${User._id}`, User)
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }

  getReservations(){
    return this.http.get(this.URL_API2)
  }

  postReservation(Reservation: Reservation){
    return this.http.post(this.URL_API2, Reservation);
  }

  putReservation(Reservation: Reservation){
    return this.http.put(this.URL_API2 + `/${Reservation._id}`, Reservation)
  }

  deleteReservation(_id: string){
    return this.http.delete(this.URL_API2 + `/${_id}`)
  }

  getTables(){
    return this.http.get(this.URL_API3)
  }

  postTable(Table: Table){
    return this.http.post(this.URL_API3, Table);
  }

  putTable(Table: Table){
    return this.http.put(this.URL_API3 + `/${Table._id}`, Table)
  }

  deleteTable(_id: string){
    return this.http.delete(this.URL_API3 + `/${_id}`)
  }

}

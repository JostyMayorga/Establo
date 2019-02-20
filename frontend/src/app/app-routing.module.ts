import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TableComponent } from './components/table/table.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminlocalComponent } from './adminlocal/adminlocal.component';
import { ReservaComponent } from './reserva/reserva.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path:"reserva", component: ReservaComponent},
  {path:"adminlocal", component: AdminlocalComponent},
  {path:"loginadmin", component: LoginadminComponent},
  {path:"users", component: UsersComponent},
  {path:"reservation", component: ReservationComponent},
  {path:"table", component: TableComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { TableComponent } from './components/table/table.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservaComponent } from './reserva/reserva.component';
import { AdminlocalComponent } from './adminlocal/adminlocal.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReservationComponent,
    TableComponent,
    HomeComponent,
    LoginComponent,
    LoginadminComponent,
    RegistroComponent,
    ReservaComponent,
    AdminlocalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

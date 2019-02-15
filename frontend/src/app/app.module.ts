import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    PayrollComponent,
    VacationComponent,
    HomeComponent,
    LoginComponent,
    LoginadminComponent
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

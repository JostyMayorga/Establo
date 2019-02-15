import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employees/employees.component';
import { PayrollComponent } from './components/payroll/payroll.component';
import { VacationComponent } from './components/vacation/vacation.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"", redirectTo: "home", pathMatch: "full"},
  {path:"home", component: HomeComponent},
  {path:"login", component: LoginComponent},
  {path:"loginadmin", component: LoginadminComponent},
  {path:"employees", component: EmployeesComponent},
  {path:"payroll", component: PayrollComponent},
  {path:"vacation", component: VacationComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

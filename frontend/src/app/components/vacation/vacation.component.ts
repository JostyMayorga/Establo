import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { Vacation } from 'src/app/models/vacation';
import { Employee } from 'src/app/models/employee';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css'],
  providers: [EmployeeService]
})
export class VacationComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getVacations();
    this.getEmployees();
  }

  addVacation(form: NgForm){
    if(form.value._id){
      this.employeeService.putVacation(form.value).subscribe(res =>{
        
      })
    }else{

    this.employeeService.postVacation(form.value).subscribe(res => {
      this.resetForm(form);

      this.getVacations();
    });
  }
  }

  editVacation(vacation: Vacation){

    this.employeeService.selectedVacation = vacation;
  }

  deleteVacation(_id: string){
      if(confirm('Are you sure?')){
        this.employeeService.deleteVacation(_id).subscribe (res => {

        this.getVacations();
        
      });
    }

  }

  getVacations(){
    this.employeeService.getVacations().subscribe(res=>{
      this.employeeService.vacations = res as Vacation[];
    })
  }
  getEmployees(){
    this.employeeService.getEmployees().subscribe(res=>{
      this.employeeService.employees = res as Employee[];
    })
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.employeeService.selectedVacation = new Vacation();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { Payroll } from 'src/app/models/payroll';
import { Employee } from 'src/app/models/employee';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css'],
  providers: [EmployeeService]
})
export class PayrollComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getPayrolls();
    this.getEmployees();
  }

  addPayroll(form: NgForm){
    if(form.value._id){
      this.employeeService.putPayroll(form.value).subscribe(res =>{
        
      })
    }else{

    this.employeeService.postPayroll(form.value).subscribe(res => {
      this.resetForm(form);

      this.getPayrolls();
    });
  }
  }

  editPayroll(payroll: Payroll){

    this.employeeService.selectedPayroll = payroll;
  }

  deletePayroll(_id: string){
      if(confirm('Are you sure?')){
        this.employeeService.deletePayroll(_id).subscribe (res => {

        this.getPayrolls();
        
      });
    }

  }

  getPayrolls(){
    this.employeeService.getPayrolls().subscribe(res=>{
      this.employeeService.payrolls = res as Payroll[];
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
      this.employeeService.selectedPayroll = new Payroll();
    }
  }
}

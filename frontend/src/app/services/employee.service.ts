import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Employee } from '../models/employee';
import { Payroll } from '../models/payroll';
import { Vacation } from '../models/vacation';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee: Employee;
  selectedPayroll: Payroll;
  selectedVacation: Vacation;
  employees: Employee[];
  payrolls: Payroll[];
  vacations: Vacation[];
  readonly URL_API = 'http://localhost:3000/api/employees'
  readonly URL_API2 = 'http://localhost:3000/api/payrolls'
  readonly URL_API3 = 'http://localhost:3000/api/vacations'
  constructor(private http: HttpClient) {
    this.selectedEmployee = new Employee();
    this.selectedPayroll = new Payroll();
    this.selectedVacation = new Vacation();
  }

  getEmployees(){
    return this.http.get(this.URL_API)
  }

  postEmployee(Employee: Employee){
    return this.http.post(this.URL_API, Employee);
  }

  putEmployee(Employee: Employee){
    return this.http.put(this.URL_API + `/${Employee._id}`, Employee)
  }

  deleteEmployee(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }

  getPayrolls(){
    return this.http.get(this.URL_API2)
  }

  postPayroll(Payroll: Payroll){
    return this.http.post(this.URL_API2, Payroll);
  }

  putPayroll(Payroll: Payroll){
    return this.http.put(this.URL_API2 + `/${Payroll._id}`, Payroll)
  }

  deletePayroll(_id: string){
    return this.http.delete(this.URL_API2 + `/${_id}`)
  }

  getVacations(){
    return this.http.get(this.URL_API3)
  }

  postVacation(Vacation: Vacation){
    return this.http.post(this.URL_API3, Vacation);
  }

  putVacation(Vacation: Vacation){
    return this.http.put(this.URL_API3 + `/${Vacation._id}`, Vacation)
  }

  deleteVacation(_id: string){
    return this.http.delete(this.URL_API3 + `/${_id}`)
  }

}

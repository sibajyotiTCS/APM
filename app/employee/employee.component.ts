import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';

import { EmployeeService } from './employee.service';


@Component({
    templateUrl:'app/employee/employee.component.html'
})
export class EmployeeComponent implements OnInit{

    pageTitle:string = "Employee List";
    listFilter: string;
    errorMessage: string;
    employees:IEmployee[];
    constructor(private _employeeService:EmployeeService){ }    

    ngOnInit():void{
      this._employeeService.getEmployee()
      .subscribe(employees => this.employees = employees,
      error=> this.errorMessage = <string>error);
    }
}
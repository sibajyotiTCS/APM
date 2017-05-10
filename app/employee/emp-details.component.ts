import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';

import { IEmployee } from './employee';
@Component({
    templateUrl:"app/employee/emp-details.component.html"
})
export class EmployeeDetailsComponent implements OnInit{
    id:number;
    employee:IEmployee;
    error:Error;
    pageTitle:string="Employee Details";
    constructor(private _route:ActivatedRoute,
                private _router:Router, 
                private _employeeService:EmployeeService){

    }
    ngOnInit(){
        this._route.params.subscribe( param=>{
            let id = param['id'];
            this.getEmpByID(id);
        });
    } 

    getEmpByID(id:any){
        this._employeeService.getEmployee(id).subscribe(
            emp=> this.employee = emp,
            error=> this.error = error
        )
    }   

    onBack(){
        this._router.navigate(["employee"]);
    }
    
}

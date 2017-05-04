import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';


@Component({
    templateUrl:'app/employee/employee.component.html'
})
export class EmployeeComponent implements OnInit{

    pageTitle:string = "Employee List";
    listFilter: string;
    errorMessage: string;
    employees:Array<IEmployee>;

    constructor(){
       
    }

    ngOnInit():void{
        this.employees =[
            {
                EmpId:1001,
                EmpName:'Sibajyoti',
                EmpLocation:'Kolkata',
                EmpDesignation:'System Engineer',
                EmpPhone:9916554718
            },{
                EmpId:1002,
                EmpName:'Subir',
                EmpLocation:'Kolkata',
                EmpDesignation:'AST',
                EmpPhone:9916550000
            },{
                EmpId:1003,
                EmpName:'Sudip',
                EmpLocation:'Kolkata',
                EmpDesignation:'AST',
                EmpPhone:9916550001
            },{
                EmpId:1004,
                EmpName:'Subhajit',
                EmpLocation:'Kolkata',
                EmpDesignation:'System Engineer',
                EmpPhone:9916550003
            }
        ];
    }
}
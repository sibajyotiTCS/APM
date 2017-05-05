import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { IEmployee } from './employee';

@Injectable()
export class EmployeeService{
    private _empurl = "api/employees/employees.json";

    constructor(private _http:Http){}

    getEmployees():Observable<IEmployee[]>{
      return this._http.get(this._empurl)
        .map((response:Response)=> <IEmployee[]>response.json())
        ._do((data)=> console.log("all "+ JSON.stringify(data)))
        ._catch(this.handleError);
        
    }

    getEmployee(id:number):Observable<IEmployee>{
        return this.getEmployees()
        .map((emps:IEmployee[])=> emps.find(p=>p.EmpId == id));
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || "Server Error");
    }
}

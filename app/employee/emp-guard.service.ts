import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeGuardService implements CanActivate{
    id:number;
   constructor(private _router:Router){

   }
    canActivate(_route:ActivatedRouteSnapshot){
        let id:string = _route.url[1].toString();
        if( (+id % 2) ==0)
            return true;
        return false;
    }
}
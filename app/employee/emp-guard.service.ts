import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeGuardService implements CanActivate{
    id:number;
   constructor(private _router:Router){

   }
    canActivate(_route:ActivatedRouteSnapshot){
        
        return false;
    }
}
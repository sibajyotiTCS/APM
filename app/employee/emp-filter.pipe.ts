import { PipeTransform, Pipe } from '@angular/core';
import { IEmployee } from './employee';
@Pipe({
    name:'filterEmployee'
})
export class EmployeeFilterPipe implements PipeTransform{
    transform(value:IEmployee[],arg:string){
        arg = arg ? arg.toLocaleLowerCase() : null;
        return arg ? value.filter(v=> v.EmpName.toLowerCase().indexOf(arg) != -1):value;
    }
}
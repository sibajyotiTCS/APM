import {NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee.component';
import { EmployeeService } from './employee.service';

@NgModule({
    imports:[
        RouterModule.forChild([
            { path: 'employee', component: EmployeeComponent },
        ]),
        CommonModule,
        FormsModule
    ],
    providers:[EmployeeService],
    declarations:[EmployeeComponent]
})
export class EmployeeModule{

}
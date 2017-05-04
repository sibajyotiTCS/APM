import {NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { EmployeeComponent } from './employee.component';

@NgModule({
    imports:[
        RouterModule.forChild([
            { path: 'employee', component: EmployeeComponent },
        ])

    ],
    declarations:[EmployeeComponent]
})
export class EmployeeModule{

}
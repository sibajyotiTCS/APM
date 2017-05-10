import {NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeDetailsComponent } from './emp-details.component';
import { EmployeeService } from './employee.service';
import { EmployeeFilterPipe } from './emp-filter.pipe';
import { EmployeeGuardService } from './emp-guard.service';

@NgModule({
    imports:[
        RouterModule.forChild([
            { path: 'employee', component: EmployeeComponent },
            { path: 'employee/:id', 
            canActivate:[EmployeeGuardService],
            component: EmployeeDetailsComponent },
            
        ]),
        SharedModule
    ],
    providers:[EmployeeService,EmployeeGuardService],
    declarations:[EmployeeComponent,EmployeeDetailsComponent,EmployeeFilterPipe]
})
export class EmployeeModule{

}
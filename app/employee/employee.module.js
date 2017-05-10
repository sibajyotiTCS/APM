"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const shared_module_1 = require("../shared/shared.module");
const employee_component_1 = require("./employee.component");
const emp_details_component_1 = require("./emp-details.component");
const employee_service_1 = require("./employee.service");
const emp_filter_pipe_1 = require("./emp-filter.pipe");
const emp_guard_service_1 = require("./emp-guard.service");
let EmployeeModule = class EmployeeModule {
};
EmployeeModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'employee', component: employee_component_1.EmployeeComponent },
                { path: 'employee/:id',
                    canActivate: [emp_guard_service_1.EmployeeGuardService],
                    component: emp_details_component_1.EmployeeDetailsComponent },
            ]),
            shared_module_1.SharedModule
        ],
        providers: [employee_service_1.EmployeeService, emp_guard_service_1.EmployeeGuardService],
        declarations: [employee_component_1.EmployeeComponent, emp_details_component_1.EmployeeDetailsComponent, emp_filter_pipe_1.EmployeeFilterPipe]
    })
], EmployeeModule);
exports.EmployeeModule = EmployeeModule;
//# sourceMappingURL=employee.module.js.map
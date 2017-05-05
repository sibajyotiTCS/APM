"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let EmployeeComponent = class EmployeeComponent {
    constructor() {
        this.pageTitle = "Employee List";
        this.employees = [
            {
                EmpId: 1001,
                EmpName: 'Sibajyoti',
                EmpLocation: 'Kolkata',
                EmpDesignation: 'System Engineer',
                EmpPhone: 9916554718
            }, {
                EmpId: 1002,
                EmpName: 'Subir',
                EmpLocation: 'Kolkata',
                EmpDesignation: 'AST',
                EmpPhone: 9916550000
            }, {
                EmpId: 1003,
                EmpName: 'Sudip',
                EmpLocation: 'Kolkata',
                EmpDesignation: 'AST',
                EmpPhone: 9916550001
            }, {
                EmpId: 1004,
                EmpName: 'Subhajit',
                EmpLocation: 'Kolkata',
                EmpDesignation: 'System Engineer',
                EmpPhone: 9916550003
            }
        ];
    }
    ngOnInit() {
        // this.employees 
    }
};
EmployeeComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/employee/employee.component.html'
    }),
    __metadata("design:paramtypes", [])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map
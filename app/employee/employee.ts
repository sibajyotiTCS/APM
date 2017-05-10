/* Defines the Employee entity */
export interface IEmployee {
    EmpId: number;
    EmpName: string;
    EmpLocation: string;
    EmpSalary?: number;
    EmpDesignation: string;
    EmpPhone: number;
    
    EmpRating:number;
}
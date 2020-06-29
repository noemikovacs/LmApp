import { HttpClient } from "@angular/common/http";
import { ApplicationService } from "../core/services/application.service";
import { Injectable } from "@angular/core";
import { Employee } from "./employees.models";

@Injectable()
export class EmployeesService {

    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getEmployee(id: number) {
        return this.http.get<Employee>(`${this.applicationService.baseUrl}api/Employees/${id}`);
    }

    listEmployees() {
        return this.http.get<Employee[]>(`${this.applicationService.baseUrl}api/Employees`);
    }

    saveEmployee(employee: Employee) {
        return this.http.post(`${this.applicationService.baseUrl}api/Employees`, employee);
    }

    modifyEmployee(employee: Employee) {
        return this.http.put(`${this.applicationService.baseUrl}api/Employees/${employee.id}`, employee);
    }

    deleteEmployee(id: number) {
        return this.http.delete<any>(`${this.applicationService.baseUrl}api/Employees/${id}`);
    }
}

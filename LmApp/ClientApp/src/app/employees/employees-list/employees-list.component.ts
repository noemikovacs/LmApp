import { Component, OnInit } from '@angular/core';
import { Employee } from '../employees.models';
import { EmployeesService } from '../employees.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

    public displayedColumns: string[] = ['name', 'position', 'action'];
    public employees: Employee[];

    public dataSource;
    public isloading = false;

    constructor(private employeesService: EmployeesService) { }

    ngOnInit() {
        this.loadEmployees();
    }



    async loadEmployees() {
        try {
            this.employeesService.listEmployees().subscribe(res => {
                this.employees = res;
                this.dataSource = new MatTableDataSource(this.employees);
                this.isloading = true;
            });
        } catch (err) {
            console.error(`this is not good: ${err.Message}`);
            this.isloading = false;
        }
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteEmployee(employee: Employee) {
        this.employeesService.deleteEmployee(employee.id).subscribe(x => {
            this.loadEmployees();
        });
    }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../employees.models';

@Component({
  selector: 'app-employees-edit',
  templateUrl: './employees-edit.component.html',
  styleUrls: ['./employees-edit.component.css']
})
export class EmployeesEditComponent implements OnInit {
    private routerLink: string = '../list';

    private employeeID: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private employeesService: EmployeesService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.employeeID = parseInt(this.route.snapshot.params['id']);

        if (this.employeeID) {
            this.routerLink = '../../list';

            this.employeesService.getEmployee(this.employeeID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm(<Employee>{});
        }
    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let employee = this.formGroup.value as Employee;
            employee.name = employee.name;

            if (this.isEdit) {
                employee.id = this.employeeID;

                this.employeesService.modifyEmployee(employee).subscribe(res => {
                    this.router.navigate(['/employees']);
                });
            } else {

                this.employeesService.saveEmployee(employee).subscribe(res => {
                    this.router.navigate(['/employees']);
                });
            }
        }
    }

    initForm(employee: Employee) {
        this.formGroup = this.formBuilder.group({
            name: [employee.name, Validators.required],
            position: [employee.position, Validators.required]
        });
    }

}

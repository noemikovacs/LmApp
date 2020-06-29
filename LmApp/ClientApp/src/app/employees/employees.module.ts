import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';



@NgModule({
  declarations: [EmployeesEditComponent, EmployeesListComponent],
  imports: [
    CommonModule
  ]
})
export class EmployeesModule { }

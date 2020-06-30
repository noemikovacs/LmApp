
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeesEditComponent } from './employees-edit/employees-edit.component';


const routes: Routes = [
    {
        path: '', component: EmployeesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: EmployeesListComponent },
            { path: 'edit/:id', component: EmployeesEditComponent },
            { path: 'edit', component: EmployeesEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmployeesRoutingModule {
    static routedComponents = [EmployeesComponent, EmployeesListComponent, EmployeesEditComponent];
}

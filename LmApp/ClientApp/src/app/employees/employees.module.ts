import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { EmployeesRoutingModule } from './employees-routing.module';

import { EmployeesService } from './employees.service';

@NgModule({
    declarations: [EmployeesRoutingModule.routedComponents],
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [EmployeesService],
})
export class EmployeesModule { }

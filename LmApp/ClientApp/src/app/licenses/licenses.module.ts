import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { LicensesRoutingModule } from './licenses-routing.module';

import { LicensesService } from './licenses.service';

@NgModule({
    declarations: [LicensesRoutingModule.routedComponents],
    imports: [
        CommonModule,
        LicensesRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [LicensesService],
})
export class LicensesModule { }

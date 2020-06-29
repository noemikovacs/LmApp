import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { AngularMaterialModule } from '../shared/angular-material.module';

import { ToolsRoutingModule } from './tools-routing.module';

import { ToolsService } from './tools.service';

@NgModule({
    declarations: [ToolsRoutingModule.routedComponents],
    imports: [
        CommonModule,
        ToolsRoutingModule,
        AngularMaterialModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [ToolsService],
})
export class ToolsModule { }

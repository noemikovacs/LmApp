import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolsEditComponent } from './tools-edit/tools-edit.component';
import { ToolsListComponent } from './tools-list/tools-list.component';



@NgModule({
  declarations: [ToolsEditComponent, ToolsListComponent],
  imports: [
    CommonModule
  ]
})
export class ToolsModule { }

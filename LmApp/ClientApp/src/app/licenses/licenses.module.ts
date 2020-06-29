import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LisensesEditComponent } from './lisenses-edit/lisenses-edit.component';
import { LisensesListComponent } from './lisenses-list/lisenses-list.component';



@NgModule({
  declarations: [LisensesEditComponent, LisensesListComponent],
  imports: [
    CommonModule
  ]
})
export class LicensesModule { }

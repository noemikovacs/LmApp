
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicensesComponent } from './licenses.component';
import { LicensesListComponent } from './licenses-list/licenses-list.component';
import { LicensesEditComponent } from './licenses-edit/licenses-edit.component';



const routes: Routes = [
    {
        path: '', component: LicensesComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: LicensesListComponent },
            { path: 'edit/:id', component: LicensesEditComponent },
            { path: 'edit', component: LicensesEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class LicensesRoutingModule {
    static routedComponents = [LicensesComponent, LicensesListComponent, LicensesEditComponent];
}

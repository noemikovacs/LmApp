
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToolsComponent } from './tools.component';
import { ToolsListComponent } from './tools-list/tools-list.component';
import { ToolsEditComponent } from './tools-edit/tools-edit.component';




const routes: Routes = [
    {
        path: '', component: ToolsComponent,
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ToolsListComponent },
            { path: 'edit/:id', component: ToolsEditComponent },
            { path: 'edit', component: ToolsEditComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ToolsRoutingModule {
    static routedComponents = [ToolsComponent, ToolsListComponent, ToolsEditComponent];
}

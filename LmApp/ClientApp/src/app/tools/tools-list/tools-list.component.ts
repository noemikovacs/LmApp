import { Component, OnInit } from '@angular/core';
import { Tool } from '../tools.models';
import { ToolsService } from '../tools.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.css']
})
export class ToolsListComponent implements OnInit {

    public displayedColumns: string[] = ['name', 'vendor', 'licenses', 'action'];
    public tools: Tool[];

    public dataSource;
    public isloading = false;

    constructor(private toolsService: ToolsService) { }

    ngOnInit() {
        this.loadTools();
    }

    async loadTools() {
        try {
            this.toolsService.listTools().subscribe(res => {
                this.tools = res;
                this.dataSource = new MatTableDataSource(this.tools);
                this.isloading = true;
            });
        } catch (err) {
            console.error(`this is not good: ${err.Message}`);
            this.isloading = false;
        }
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteTool(tool: Tool) {
        this.toolsService.deleteTool(tool.id).subscribe(x => {
            this.loadTools();
        });
    }

}

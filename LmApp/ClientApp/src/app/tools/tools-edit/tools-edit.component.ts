import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolsService } from '../tools.service';
import { Tool } from '../tools.models';

@Component({
  selector: 'app-tools-edit',
  templateUrl: './tools-edit.component.html',
  styleUrls: ['./tools-edit.component.css']
})
export class ToolsEditComponent implements OnInit {

    private routerLink: string = '../list';

    private toolID: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private toolsService: ToolsService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.toolID = parseInt(this.route.snapshot.params['id']);

        if (this.toolID) {
            this.routerLink = '../../list';

            this.toolsService.getTool(this.toolID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm(<Tool>{});
        }
    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let tool = this.formGroup.value as Tool;
            tool.name = tool.name;

            if (this.isEdit) {
                tool.id = this.toolID;

                this.toolsService.modifyTool(tool).subscribe(res => {
                    this.router.navigate(['/tools']);
                });
            } else {

                this.toolsService.saveTool(tool).subscribe(res => {
                    this.router.navigate(['/tools']);
                });
            }
        }
    }

    initForm(tool: Tool) {
        this.formGroup = this.formBuilder.group({
            name: [tool.name, Validators.required],
            vendor: [tool.vendor, Validators.required]
        });
    }
}

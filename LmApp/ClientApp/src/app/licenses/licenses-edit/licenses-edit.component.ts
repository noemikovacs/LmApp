import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LicensesService } from '../licenses.service';
import { License } from '../licenses.models';

@Component({
  selector: 'app-licenses-edit',
  templateUrl: './licenses-edit.component.html',
  styleUrls: ['./licenses-edit.component.css']
})
export class LicensesEditComponent implements OnInit {

    private routerLink: string = '../list';

    private licenseID: number;

    private isEdit: boolean = false;

    public formGroup: FormGroup;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private licensesService: LicensesService,
        private formBuilder: FormBuilder) { }

    ngOnInit() {

        this.licenseID = parseInt(this.route.snapshot.params['id']);

        if (this.licenseID) {
            this.routerLink = '../../list';

            this.licensesService.getLicense(this.licenseID).subscribe(res => {
                this.initForm(res);
                this.isEdit = true;
            });
        }
        else {
            this.initForm(<License>{});
        }
    }

    save() {
        Object.keys(this.formGroup.controls).forEach(control => {
            this.formGroup.get(control).markAsTouched();
        });

        if (this.formGroup.valid) {
            let license = this.formGroup.value as License;
            license.serialNr = license.serialNr;

            if (this.isEdit) {
                license.id = this.licenseID;

                this.licensesService.modifyLicense(license).subscribe(res => {
                    this.router.navigate(['/licenses']);
                });
            } else {

                this.licensesService.saveLicense(license).subscribe(res => {
                    this.router.navigate(['/licenses']);
                });
            }
        }
    }

    initForm(license: License) {
        this.formGroup = this.formBuilder.group({
            serialNr: [license.serialNr, Validators.required],
            expirationDate: [license.expirationDate, Validators.required],
            fkTool: [license.fkTool, Validators.required]
        });
    }
}

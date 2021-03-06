import { Component, OnInit, ViewChild } from '@angular/core';
import { License } from '../licenses.models';
import { LicensesService } from '../licenses.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-licenses-list',
  templateUrl: './licenses-list.component.html',
  styleUrls: ['./licenses-list.component.css']
})
export class LicensesListComponent implements OnInit {

    public displayedColumns: string[] = ['serialNr', 'expirationDate','fkTool', 'action'];
    public licenses: License[];

    public dataSource;
    public isloading = false;

    constructor(private licensesService: LicensesService) { }

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

    ngOnInit() {
        this.loadLicenses();
    }



    async loadLicenses() {
        try {
            this.licensesService.listLicenses().subscribe(res => {
                this.licenses = res;
                this.dataSource = new MatTableDataSource(this.licenses);
                this.isloading = true;
                this.dataSource.paginator = this.paginator;
            });
        } catch (err) {
            console.error(`this is not good: ${err.Message}`);
            this.isloading = false;
        }
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    deleteLicense(license: License) {
        this.licensesService.deleteLicense(license.id).subscribe(x => {
            this.loadLicenses();
        });
    }

}

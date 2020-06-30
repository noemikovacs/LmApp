import { HttpClient } from "@angular/common/http";
import { ApplicationService } from "../core/services/application.service";
import { Injectable } from "@angular/core";
import { License } from "./licenses.models";

@Injectable()
export class LicensesService {

    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getLicense(id: number) {
        return this.http.get<License>(`${this.applicationService.baseUrl}api/Licenses/${id}`);
    }

    listLicenses() {
        return this.http.get<License[]>(`${this.applicationService.baseUrl}api/Licenses`);
    }

    saveLicense(license: License) {
        return this.http.post(`${this.applicationService.baseUrl}api/Licenses`, license);
    }

    modifyLicense(license: License) {
        return this.http.put(`${this.applicationService.baseUrl}api/Licenses/${license.id}`, license);
    }

    deleteLicense(id: number) {
        return this.http.delete<any>(`${this.applicationService.baseUrl}api/Licenses/${id}`);
    }
}

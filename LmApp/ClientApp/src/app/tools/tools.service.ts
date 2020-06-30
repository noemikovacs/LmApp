import { HttpClient } from "@angular/common/http";
import { ApplicationService } from "../core/services/application.service";
import { Injectable } from "@angular/core";
import { Tool } from "./tools.models";

@Injectable()
export class ToolsService {

    constructor(
        private http: HttpClient,
        private applicationService: ApplicationService) { }

    getTool(id: number) {
        return this.http.get<Tool>(`${this.applicationService.baseUrl}api/Tools/${id}`);
    }

    listTools() {
        return this.http.get<Tool[]>(`${this.applicationService.baseUrl}api/Tools`);
    }

    saveTool(tool: Tool) {
        return this.http.post(`${this.applicationService.baseUrl}api/Tools`, tool);
    }

    modifyTool(tool: Tool) {
        return this.http.put(`${this.applicationService.baseUrl}api/Tools/${tool.id}`, tool);
    }

    deleteTool(id: number) {
        return this.http.delete<any>(`${this.applicationService.baseUrl}api/Tools/${id}`);
    }
}

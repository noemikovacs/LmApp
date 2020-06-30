import { License } from "../licenses/licenses.models";

export interface Tool {
    id: number;
    name: string;
    vendor: string;
    licenses: Array<License>;
}



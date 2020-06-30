import { License } from "../licenses/licenses.models";


export interface Tool {
    id: number;
    name: string;
    vendor: string;
    license: Array<License>;
}


export interface Employee {
    id: number;
    name: string;
    position: Position;
}

export enum Position {
    Tester,
    Programmer,
    Manager
}

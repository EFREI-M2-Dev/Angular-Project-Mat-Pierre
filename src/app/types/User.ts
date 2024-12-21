export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    location: string;
    languagesSpoken: string[]; 
    companyId?: number;
}
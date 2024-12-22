export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    languageSpoken: string; 
    companyId?: number;
}
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/types/Company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private readonly http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/companies';

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompany(id: string): Observable<Company> {
    return this.http.get<Company>(this.apiUrl + '/' + id);
  }
}

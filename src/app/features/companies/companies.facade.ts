import { inject, Injectable } from '@angular/core';
import { CompanyService } from 'src/app/core/services/company.service';

@Injectable({
  providedIn: 'root',
})
export class CompaniesFacade {
  private readonly companyService = inject(CompanyService);

  public getCompanies() {
    return this.companyService.getCompanies();
  }

  public getCompany(id: string) {
    return this.companyService.getCompany(id);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from 'src/app/types/Company';
import { CompaniesFacade } from './companies.facade';
import { CompanyCardComponent } from "./components/company-card/company-card.component";

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, CompanyCardComponent],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {
  private readonly companiesFacade = inject(CompaniesFacade);

  public companies: Company[] = [];

  public ngOnInit(): void {
    this.companiesFacade.getCompanies().subscribe((res) => {
      this.companies = res;
    });
  }
}

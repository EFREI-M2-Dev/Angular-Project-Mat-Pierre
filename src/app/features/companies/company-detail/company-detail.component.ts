import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Company } from 'src/app/types/Company';
import { CompaniesFacade } from '../companies.facade';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { catchError, of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-company-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    RouterLink,
    MatButtonModule
  ],
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly companiesFacade = inject(CompaniesFacade);

  public companyId: string | null = null;
  public company: Company | null = null

  public ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('id');

    this.companiesFacade
      .getCompany(this.companyId || '')
      .pipe(
        catchError((error) => {
          console.error(
            "Erreur lors de la récupération de l'entreprise :",
            error
          );
          this.router.navigate(['/companies']);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.company = res;
        }
      });
  }
}

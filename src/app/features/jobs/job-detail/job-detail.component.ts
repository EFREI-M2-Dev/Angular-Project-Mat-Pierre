import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Job } from 'src/app/types/Job';
import { JobsFacade } from '../jobs.facade';
import { FormatDatePipe } from '../../../shared/pipes/format-date.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { catchError, of } from 'rxjs';
import { Company } from 'src/app/types/Company';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormatDatePipe,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    MatListModule,
    RouterLink,
  ],
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly jobsFacade = inject(JobsFacade);

  public jobId: string | null = null;
  public job: Job | null = null;
  public company: Company | null = null

  public ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');

    this.jobsFacade
      .getJob(this.jobId || '')
      .pipe(
        catchError((error) => {
          console.error("Erreur lors de la récupération de l'offre :", error);
          this.router.navigate(['/jobs']);
          return of(null);
        })
      )
      .subscribe((res) => {
        if (res) {
          this.job = res;
          this.loadCompany(this.job.companyId);
        }
      });
  }

  private loadCompany(companyId: number): void {
    this.jobsFacade
      .getCompany(companyId.toString())
      .pipe(
        catchError((error) => {
          console.error(
            "Erreur lors de la récupération de l'entreprise :",
            error
          );
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

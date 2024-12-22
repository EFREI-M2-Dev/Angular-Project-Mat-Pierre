import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Job, JobFilters } from 'src/app/types/Job';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component';
import { JobsSearchComponent } from './components/jobs-search/jobs-search.component';
import { JobsFacade } from './jobs.facade';
import { map } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    JobCardComponent,
    JobsSearchComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  private readonly jobsFacade = inject(JobsFacade);
  private readonly userService = inject(UserService);

  public jobs: Job[] = [];
  public filteredJobs: Job[] = [];

  public ngOnInit(): void {
    this.jobsFacade.getJobs().pipe(
      map(jobs => jobs.filter(job => {
        const userLanguage = this.userService.currentUser?.languageSpoken;
        return userLanguage === 'none' ? job : userLanguage && job.languages.includes(userLanguage);
      }))
    ).subscribe((res) => {
      this.jobs = res;
      this.filteredJobs = res;
    });
  }

  public applyFilters(filters: JobFilters): void {
    const { search, contractTypes } = filters;

    this.filteredJobs = this.jobs.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.description.toLowerCase().includes(search.toLowerCase());

      const matchesContractType =
        contractTypes.length === 0 || contractTypes.includes(job.contractType);

      return matchesSearch && matchesContractType;
    });
  }
}

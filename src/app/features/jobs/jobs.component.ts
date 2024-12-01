import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Job } from 'src/app/types/Job';
import { JobCardComponent } from '../../shared/components/job-card/job-card.component';
import { JobsSearchComponent } from './components/jobs-search/jobs-search.component';
import { JobsFacade } from './jobs.facade';

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

  public jobs: Job[] = [];

  public ngOnInit(): void {
    this.jobsFacade.getJobs().subscribe((res) => {
      this.jobs = res;
    });
  }
}

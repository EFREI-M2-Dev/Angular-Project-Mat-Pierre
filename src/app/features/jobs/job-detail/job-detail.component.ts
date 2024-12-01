import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/types/Job';
import { JobsFacade } from '../jobs.facade';
import { FormatDatePipe } from '../../../shared/pipes/format-date.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

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
  ],
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss'],
})
export class JobDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly jobsFacade = inject(JobsFacade);

  public jobId: string | null = null;
  public job: Job = {
    id: 0,
    title: '',
    companyId: 0,
    description: '',
    requirements: [],
    location: '',
    contractType: 'CDI',
    experienceLevel: 'Junior',
    industry: '',
    languages: [],
    postedDate: '',
    status: 'active',
    image: '',
  };

  public ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');

    this.jobsFacade.getJob(this.jobId || '').subscribe((res) => {
      this.job = res;
    });
  }
}

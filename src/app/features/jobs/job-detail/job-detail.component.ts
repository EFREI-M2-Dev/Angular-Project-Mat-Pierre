import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/types/Job';
import { JobsFacade } from '../jobs.facade';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [CommonModule],
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
  };

  public ngOnInit(): void {
    this.jobId = this.route.snapshot.paramMap.get('id');

    this.jobsFacade.getJob(this.jobId || '').subscribe((res) => {
      this.job = res;
    });
  }
}

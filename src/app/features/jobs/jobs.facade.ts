import { inject, Injectable } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';

@Injectable({
  providedIn: 'root',
})
export class JobsFacade {
  private readonly jobService = inject(JobService);

  public getJobs() {
    return this.jobService.getJobs();
  }

  public getJob(id: string) {
    return this.jobService.getJob(id);
  }
}

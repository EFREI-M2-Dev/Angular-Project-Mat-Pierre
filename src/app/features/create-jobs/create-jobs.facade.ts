import { inject, Injectable } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';
import { Job } from 'src/app/types/Job';

@Injectable({
  providedIn: 'root',
})
export class CreateJobsFacade {
  private readonly jobService = inject(JobService);

  public createJob(job: Job) {
    return this.jobService.createJob(job);
  }

  public getExperienceLevel() {
    return this.jobService.getExperienceLevel();
  }

  public getContractType() {
    return this.jobService.getContractType();
  }
}

import { inject, Injectable } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';
import { UserService } from 'src/app/core/services/user.service';
import { Job } from 'src/app/types/Job';

@Injectable({
  providedIn: 'root',
})
export class CreateJobsFacade {
  private readonly jobService = inject(JobService);
  private readonly userService = inject(UserService);

  public createJob(job: Job) {
    return this.jobService.createJob(job);
  }

  public getExperienceLevel() {
    return this.jobService.getExperienceLevel();
  }

  public getContractType() {
    return this.jobService.getContractType();
  }

  public getUser() {
    return this.userService.currentUser;
  }
}

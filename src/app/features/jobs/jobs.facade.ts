import { inject, Injectable } from '@angular/core';
import { CompanyService } from 'src/app/core/services/company.service';
import { JobService } from 'src/app/core/services/job.service';
import { UserService } from 'src/app/core/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class JobsFacade {
  private readonly jobService = inject(JobService);
  private readonly companyService = inject(CompanyService);
  private readonly userService = inject(UserService);

  public getJobs() {
    return this.jobService.getJobs();
  }

  public getJob(id: string) {
    return this.jobService.getJob(id);
  }

  public getContractType() {
    return this.jobService.getContractType();
  }

  public getCompany(id: string) {
    return this.companyService.getCompany(id);
  }

  public getUser() {
    return this.userService.currentUser;
  }
}

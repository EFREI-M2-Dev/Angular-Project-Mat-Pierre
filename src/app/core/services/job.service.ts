import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractType, ExperienceLevel, Job } from 'src/app/types/Job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private readonly http = inject(HttpClient);

  private apiUrl = 'http://localhost:3000/jobs';

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  getJob(id: string): Observable<Job> {
    return this.http.get<Job>(this.apiUrl + '/' + id);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  getContractType(): ContractType[] {
    return ['CDI', 'CDD', 'Freelance', 'Stage', 'Alternance'];
  }

  getExperienceLevel(): ExperienceLevel[] {
    return ['Junior', 'Intermédiaire', 'Senior'];
  }
}

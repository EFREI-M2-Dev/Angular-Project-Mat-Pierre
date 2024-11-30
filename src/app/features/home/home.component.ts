import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { JobCardComponent } from '../../shared/job-card/job-card.component';
import { Job } from 'src/app/types/Job';
import { MatButtonModule } from '@angular/material/button';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';
import { JobService } from 'src/app/core/services/job.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    JobCardComponent,
    MatButtonModule,
    HomeHeroComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly jobService = inject(JobService);

  public jobs: Job[] = [];

  public ngOnInit(): void {
    this.jobService
      .getJobs()
      .pipe(map((res) => res.slice(0, 3)))
      .subscribe((filteredJobs) => {
        this.jobs = filteredJobs;
      });
  }
}

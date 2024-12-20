import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Job } from 'src/app/types/Job';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { NewBadgeDirective } from '../../directives/new-badge.directive';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    FormatDatePipe,
    NewBadgeDirective,
  ],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input() job: Job = {
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
}

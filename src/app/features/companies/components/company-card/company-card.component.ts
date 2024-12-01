import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Company } from 'src/app/types/Company';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-company-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    MatIconModule,
    MatChipsModule,
  ],
  templateUrl: './company-card.component.html',
  styleUrls: ['./company-card.component.scss'],
})
export class CompanyCardComponent {
  @Input() company: Company = {
    id: 0,
    name: '',
    industry: '',
    location: '',
    remoteFriendly: false,
    description: '',
    website: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: '',
      behance: '',
    },
    size: '',
    foundedYear: 0,
    coreValues: [],
    mission: '',
    benefits: [],
    jobOffers: [],
  };
}

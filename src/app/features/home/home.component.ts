import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { JobCardComponent } from '../../shared/job-card/job-card.component';
import { Job } from 'src/app/types/Job';
import { MatButtonModule } from '@angular/material/button';
import { HomeHeroComponent } from './components/home-hero/home-hero.component';

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
  jobs: Job[] = [
    {
      title: 'Développeur Full Stack',
      description: 'Développer des applications Web modernes.',
      requirements: ['HTML/CSS', 'JavaScript'],
      id: 0,
      companyId: 0,
    },
    {
      title: 'Analyste de données',
      description: 'Analyser et interpréter des données complexes.',
      requirements: ['Python', 'SQL', 'Tableau'],
      id: 0,
      companyId: 0,
    },
    {
      title: 'Designer UI/UX',
      description: 'Créer des interfaces utilisateur attrayantes.',
      requirements: ['Figma', 'Adobe XD', 'Design Thinking'],
      id: 0,
      companyId: 0,
    },
  ];
}

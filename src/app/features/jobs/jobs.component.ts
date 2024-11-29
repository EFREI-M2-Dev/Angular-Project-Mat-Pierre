import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Job } from 'src/app/types/Job';
import { JobCardComponent } from './components/job-card/job-card.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    JobCardComponent,
  ],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
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
    {
      title: 'Chef de projet',
      description: 'Gérer et planifier des projets informatiques.',
      requirements: ['Agilité', 'Scrum', 'Communication'],
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
    {
      title: 'Chef de projet',
      description: 'Gérer et planifier des projets informatiques.',
      requirements: ['Agilité', 'Scrum', 'Communication'],
      id: 0,
      companyId: 0,
    },
  ];
}

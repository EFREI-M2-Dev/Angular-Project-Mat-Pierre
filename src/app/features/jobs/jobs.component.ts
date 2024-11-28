import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatGridListModule],
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent {
  cards = [
    {
      title: 'Développeur Full Stack',
      content: 'Développer des applications Web modernes.',
      subtitle: ['HTML/CSS', 'JavaScript'],
    },
    {
      title: 'Analyste de données',
      content: 'Analyser et interpréter des données complexes.',
      subtitle: ['Python', 'SQL', 'Tableau'],
    },
    {
      title: 'Designer UI/UX',
      content: 'Créer des interfaces utilisateur attrayantes.',
      subtitle: ['Figma', 'Adobe XD', 'Design Thinking'],
    },
    {
      title: 'Chef de projet',
      content: 'Gérer et planifier des projets informatiques.',
      subtitle: ['Agilité', 'Scrum', 'Communication'],
    },
    {
      title: 'Analyste de données',
      content: 'Analyser et interpréter des données complexes.',
      subtitle: ['Python', 'SQL', 'Tableau'],
    },
    {
      title: 'Designer UI/UX',
      content: 'Créer des interfaces utilisateur attrayantes.',
      subtitle: ['Figma', 'Adobe XD', 'Design Thinking'],
    },
    {
      title: 'Chef de projet',
      content: 'Gérer et planifier des projets informatiques.',
      subtitle: ['Agilité', 'Scrum', 'Communication'],
    },
  ];
}

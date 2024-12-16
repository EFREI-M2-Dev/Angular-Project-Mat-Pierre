import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreateJobsFormComponent } from './components/create-jobs-form/create-jobs-form.component';

@Component({
  selector: 'app-create-jobs',
  standalone: true,
  imports: [CommonModule, FormsModule, CreateJobsFormComponent],
  templateUrl: './create-jobs.component.html',
  styleUrls: ['./create-jobs.component.scss'],
})
export class CreateJobsComponent {}

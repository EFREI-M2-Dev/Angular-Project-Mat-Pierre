import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContractType, ExperienceLevel, Job, Status } from 'src/app/types/Job';
import { MatSelectModule } from '@angular/material/select';
import { CreateJobsFacade } from '../../create-jobs.facade';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-jobs-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
  ],
  templateUrl: './create-jobs-form.component.html',
  styleUrls: ['./create-jobs-form.component.scss'],
})
export class CreateJobsFormComponent {
  private readonly createJobsFacade = inject(CreateJobsFacade);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router)

  private readonly defaultImageUrl =
    'https://images.unsplash.com/photo-1573166675921-076ea6b621ce?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  public readonly contractType: ContractType[] =
    this.createJobsFacade.getContractType();

  public readonly experienceLevel: ExperienceLevel[] =
    this.createJobsFacade.getExperienceLevel();

  public jobForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    companyId: new FormControl(0, {
      nonNullable: true,
      validators: Validators.required,
    }),
    description: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    requirements: new FormControl([], {
      nonNullable: true,
    }),
    location: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    contractType: new FormControl<ContractType>('CDI', {
      nonNullable: true,
      validators: Validators.required,
    }),
    experienceLevel: new FormControl<ExperienceLevel>('Junior', {
      nonNullable: true,
      validators: Validators.required,
    }),
    industry: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    languages: new FormControl([], {
      nonNullable: true,
    }),
    postedDate: new FormControl(new Date().toISOString(), {
      nonNullable: true,
      validators: Validators.required,
    }),
    status: new FormControl<Status>('active', {
      nonNullable: true,
    }),
    image: new FormControl(this.defaultImageUrl, {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  public onSubmit(): void {
    if (this.jobForm.valid) {
      const job: Partial<Job> = this.jobForm.getRawValue();

      this.createJobsFacade.createJob(job as Job).subscribe({
        next: (createdJob) => {
          console.log('Job créé avec succès !', createdJob);
          this.snackBar.open("L'offre a créé avec succès", 'Ok');
          this.router.navigate(['/jobs', createdJob.id]);
        },
        error: (err) => {
          console.error('Erreur lors de la création :', err);
          this.snackBar.open(`Erreur lors de la création : ${err}`, 'Ok');
        },
      });
    }
  }

  public onReset(): void {
    this.jobForm.reset();
  }
}

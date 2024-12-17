import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'companies',
    loadComponent: () =>
      import('./features/companies/companies.component').then((c) => c.CompaniesComponent),
    canActivate: [authGuard],
  },
  {
    path: 'companies/:id',
    loadComponent: () =>
      import('./features/companies/company-detail/company-detail.component').then((c) => c.CompanyDetailComponent),
    canActivate: [authGuard],
  },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./features/jobs/jobs.component').then((c) => c.JobsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'create-jobs',
    loadComponent: () =>
      import('./features/create-jobs/create-jobs.component').then((c) => c.CreateJobsComponent),
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./features/jobs/job-detail/job-detail.component').then((c) => c.JobDetailComponent),
    canActivate: [authGuard],
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then((c) => c.ProfileComponent),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./features/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./features/signin/signin.component').then((c) => c.SigninComponent)
  }
];

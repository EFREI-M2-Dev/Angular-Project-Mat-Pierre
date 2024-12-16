import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'companies',
    loadComponent: () =>
      import('./features/companies/companies.component').then((c) => c.CompaniesComponent),
  },
  {
    path: 'companies/:id',
    loadComponent: () =>
      import('./features/companies/company-detail/company-detail.component').then((c) => c.CompanyDetailComponent),
  },
  {
    path: 'jobs',
    loadComponent: () =>
      import('./features/jobs/jobs.component').then((c) => c.JobsComponent),
  },
  {
    path: 'jobs/:id',
    loadComponent: () =>
      import('./features/jobs/job-detail/job-detail.component').then((c) => c.JobDetailComponent),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./features/profile/profile.component').then((c) => c.ProfileComponent),
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

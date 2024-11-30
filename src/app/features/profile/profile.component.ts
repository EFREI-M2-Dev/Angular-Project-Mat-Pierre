import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ProfileFormComponent],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {}

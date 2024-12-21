import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from 'src/app/shared/components/auth-form/auth-form.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    AuthFormComponent
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
}

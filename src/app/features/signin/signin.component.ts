import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from 'src/app/shared/components/auth-form/auth-form.component';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    AuthFormComponent
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {

}

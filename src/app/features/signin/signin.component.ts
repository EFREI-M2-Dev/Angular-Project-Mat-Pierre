import { PasswordValidatorDirective } from './../../core/directives/password-validator.directive';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit{
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  protected signinForm! : FormGroup;

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', [Validators.required, PasswordValidatorDirective.passwordValidator, Validators.minLength(6)]]
    });
  }

  get email() {
    return this.signinForm.get('email');
  }

  get name() {
    return this.signinForm.get('name');
  }

  get password() {
    return this.signinForm.get('password');
  }

  signIn() {
    if(this.signinForm.valid && this.signinForm.dirty){
      this.authService.signIn(this.name?.value, this.email?.value, this.password?.value);
    }
  }
}

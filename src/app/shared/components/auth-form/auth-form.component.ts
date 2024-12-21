import { Component, Input, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';

export const passwordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const rules = {
    capitalLetter: true,
    specialCharacter: true,
  };

  if (rules.capitalLetter && !/[A-Z]/.test(control.value)) {
    return { passwordForbidden: { capitalLetter: 'Doit contenir au moins une lettre majuscule' } };
  }

  if (rules.specialCharacter && !/[!-/:-@[-`{-~]/.test(control.value)) {
    return { passwordForbidden: { specialCharacter: 'Doit contenir au moins un caractère spécial' } };
  }

  return null;
};

@Component({
  selector: 'app-auth-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    RouterLink
  ],
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss']
})
export class AuthFormComponent implements OnInit {
  @Input() mode: 'login' | 'signin' = 'login';  // Déterminer si le formulaire est pour la connexion ou l'inscription
  protected authForm!: FormGroup;
  public isSubmitting = false;
  public wrongLogin = false;

  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  ngOnInit(): void {
    if (this.mode === 'signin') {
      this.authForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        name: ['', Validators.required],
        password: ['', [Validators.required, passwordValidator, Validators.minLength(6)]]
      });
    } else {
      this.authForm = this.formBuilder.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required]
      });
    }
  }

  get email() {
    return this.authForm.get('email');
  }

  get name() {
    return this.authForm.get('name');
  }

  get password() {
    return this.authForm.get('password');
  }

  onSubmit(): void {
    if (this.authForm.valid && this.authForm.dirty) {
      this.isSubmitting = true;
      if (this.mode === 'signin') {
        this.authService.signIn(this.name?.value, this.email?.value, this.password?.value).subscribe({
          next: (user) => {
            console.log('Utilisateur créé', user);
            this.isSubmitting = false;
          },
          error: (error) => {
            console.error('Erreur à la création', error);
            this.isSubmitting = false;
          }
        });
      } else {
        this.authService.logIn(this.email?.value, this.password?.value).subscribe({
          next: (user) => {
            console.log('Connexion réussie', user);
            this.isSubmitting = false;
          },
          error: (error) => {
            console.error('Erreur de connexion', error);
            this.isSubmitting = false;
            this.authForm.markAsPristine();
            this.wrongLogin = true;
          }
        });
      }
    }
  }
}

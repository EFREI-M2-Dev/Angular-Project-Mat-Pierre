import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { MatButtonModule } from '@angular/material/button';

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
      password: ['', [Validators.required, passwordValidator, Validators.minLength(6)]]
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

  onSignin() {
    if(this.signinForm.valid && this.signinForm.dirty){
      this.authService.signIn(this.name?.value, this.email?.value, this.password?.value).subscribe({
        next: (user) => console.log("Utilisateur créé", user),
        error: (error) => console.error("Erreur à la création", error)
    });
    }
  }
}

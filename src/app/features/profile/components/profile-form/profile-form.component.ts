import { UserService } from './../../../../core/services/user.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { User } from 'src/app/types/User';
import { AuthService } from 'src/app/core/services/auth.service';
import { passwordValidator } from 'src/app/shared/components/auth-form/auth-form.component';

export const dataValidator = (userData: User): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const name = control.get('name')?.value;
    const email = control.get('email')?.value;
    const password = control.get('password')?.value;

    const errors: ValidationErrors = {};

    if (name !== userData.name) {
      if(!name){
        errors['invalidName'] = 'L\'utilisateur doit avoir un nom';
      }
    }

    if (email !== userData.email) {
      const emailError = Validators.email(email);
      if (emailError) {
        errors['invalidEmail'] = 'L\'adresse e-mail n\'est pas valide.';
      }
    }

    if (password) {
      const passwordError = passwordValidator(password);
      if(passwordError) {
        errors['invalidPatternPassword'] = 'Le mot de passe n\'est pas correct';
      }
      if((password as string).length < 6){
        errors['invalidLengthPassword'] = 'Le mot de passe doit contenir au moins six caratères';
      }
    }

    return Object.keys(errors).length > 0 ? errors : null;
  };
};


@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit{

  public profileForm!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);
  

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [this.userService.currentUser?.name],
      email: [this.userService.currentUser?.email],
      password: [null],
      location: [this.userService.currentUser?.location],
      languageSpoken: [this.userService.currentUser?.languageSpoken || 'none']
    }, dataValidator(this.userService.currentUser!));
  }

  get email() {
    return this.profileForm.get('email');
  }

  get name() {
    return this.profileForm.get('name');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get location() {
    return this.profileForm.get('location');
  }

  get languageSpoken() {
    return this.profileForm.get('languageSpoken');
  }

  public onSubmit(): void {

    const validationErrors = this.profileForm.errors;

    if (!validationErrors) {
      const userData = this.userService.currentUser;
      const userUpdate: Partial<User> = {};
      
      if(this.name?.value !== userData!.name) {
        userUpdate.name = this.name?.value;
      }

      if(this.email?.value !== userData!.email) {
        userUpdate.email = this.email?.value;
      }

      if(this.password?.value) {
        userUpdate.password = this.password?.value;
      }

      if(this.location?.value !== userData!.location) {
        userUpdate.location = this.location?.value;
      }

      if(this.languageSpoken?.value !== userData!.languageSpoken) {
        userUpdate.languageSpoken = this.languageSpoken?.value;
      }


      this.authService.updateUser(this.userService.currentUser!.id, userUpdate).subscribe();
    }
  }

  public onReset(): void {
    this.profileForm.reset();
  }
}

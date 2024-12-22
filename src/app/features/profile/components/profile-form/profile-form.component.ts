import { UserService } from './../../../../core/services/user.service';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { User } from 'src/app/types/User';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent implements OnInit{

  public profileForm!: FormGroup;
  private readonly formBuilder = inject(FormBuilder);
  private readonly userService = inject(UserService);
  private readonly authService = inject(AuthService);
  private readonly snackBar = inject(MatSnackBar);
  

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: [this.userService.currentUser?.name, Validators.required],
      email: [this.userService.currentUser?.email, [Validators.required, Validators.email]],
      languageSpoken: [this.userService.currentUser?.languageSpoken || 'none', Validators.required]
    });
  }

  get email() {
    return this.profileForm.get('email');
  }

  get name() {
    return this.profileForm.get('name');
  }

  get languageSpoken() {
    return this.profileForm.get('languageSpoken');
  }

  public onSubmit(): void {


    if (this.profileForm.valid){
      const userUpdate: Partial<User> = {
        email: this.email?.value,
        name: this.name?.value,
        languageSpoken: this.languageSpoken?.value
      };
      this.authService.updateUser(this.userService.currentUser!.id, userUpdate).subscribe({
        next: (user) => {
          this.snackBar.open("Le profil a bien été mis à jour", 'Ok');
        }
      });
    }
  }

  public onReset(): void {
    this.profileForm.setValue({
      name: this.userService.currentUser!.name,
      email: this.userService.currentUser!.email,
      languageSpoken: this.userService.currentUser!.languageSpoken
    });
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  private readonly formBuilder = inject(FormBuilder);
  private readonly authService = inject(AuthService);
  protected loginForm! : FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onLogin(){
    if(this.loginForm.valid && this.loginForm.dirty){
      this.authService.logIn(this.email?.value, this.password?.value).subscribe({
        next: (user) => console.log("Connexion réussie", user),
        error: (error) => console.error("Erreur de connexion", error)
      })
    }
  }
}

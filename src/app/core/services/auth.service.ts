import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap, catchError, throwError, of, tap } from 'rxjs';
import { User } from 'src/app/types/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);
  private readonly userService = inject(UserService);
  private apiUrl = 'http://localhost:3000/user';

  private getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  signIn(name: string, email: string, password: string) {
    return this.isEmailUnique(email).pipe(
      switchMap(isUnique => {
        if (!isUnique) {
          return throwError(() => new Error('Email already in use'));
        }

        return this.getUsers().pipe(
          map(users => {
            const lastId = this.getLastIndexAvailable(users);
            return { id: lastId + 1, name, email, password, location: "", languagesSpoken: [] } as User;
          }),
          switchMap(newUser => this.createUser(newUser))
        );
      }),
      catchError(error => {
        console.error('Error during sign-in:', error);
        return throwError(() => error);
      })
    );
  }

  logIn(email: string, password: string) {
    this.http.post<User>(this.apiUrl, {email, password}).pipe(
      tap(user => {
        this.userService.login(user);
      }),
      catchError(error => {
        console.error('Erreur de connexion:', error);
        return throwError(() => new Error('Erreur de connexion'));
      })
    )
    
  }

  logOut() {
    this.userService.logout();
  }

  private isEmailUnique(email: string): Observable<boolean> {
    return this.http.get<User[]>(`${this.apiUrl}?email=${email}`).pipe(
      map(users => users.length === 0),
      catchError(() => of(false))
    );
  }

  private getLastIndexAvailable(users: User[]): number {
    return users.length > 0 ? users[users.length - 1].id : 0;
  }

  private createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}

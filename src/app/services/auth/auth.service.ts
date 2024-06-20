import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../../mocks/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:8080/api/users';

  private userSubject!: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(private http: HttpClient) {
    //const storedUser = localStorage.getItem('currentUser');
    //this.userSubject = new BehaviorSubject<User | null>(storedUser ? JSON.parse(storedUser) : null);
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    this.user = this.userSubject.asObservable();
  }

  // Obtenir l'utilisateur actuel à partir de 'userSubject'
  // public get currentUserValue(): User | null {
  //   return this.userSubject.value;
  // }

  signup(name: string, email:string, password: string) {
    return this.http.post(`${this.baseUrl}/signup`, {name, email, password});
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<{ user: User, token: string }>(`${this.baseUrl}/login`, { email, password })
    .pipe(map(response => {
      // garde l'utilisateur et le token dans le local storage pour conserver la connexion utilisateur quand les pages se réactualisent
      localStorage.setItem('currentUser ', JSON.stringify(response.user));
      localStorage.setItem('token ', response.token);
      //mise à jour de userSubject suite à connexion
      this.userSubject.next(response.user);
      return response.user;
    }));
  }

  logout() {
    // Supprime l'utilisateur du local storage pour la deconnexion
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    // mise à jour du userSubject suite à deconnexion
    this.userSubject.next(null);
  }

  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

  setUser(user: User) {
    this.userSubject.next(user);
  }

  getUser(): User | null {
    return this.userSubject.value;
  }

}

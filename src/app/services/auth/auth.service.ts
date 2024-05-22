import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:3000/api/users';

  constructor(private http: HttpClient) {}

  signup(name: string, email:string, password: string) {
    return this.http.post(`${this.baseUrl}/signup`, {name, email, password});
  }

  login(email:string, password: string) {
    return this.http.post(`${this.baseUrl}/login`, {email, password});
  }
}

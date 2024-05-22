import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css'
})
export class AuthLoginComponent {

  email: string = '';
  password: string = '';
  errorMessage : string = '';

  constructor(private authService: AuthService) {}

  login() {
    //gestion redirection après connexion
    this.authService.login(this.email, this.password).subscribe(
      response => {
      console.log('Connecté avec succès', response);
    },
      error => {
        console.error('Erreur de connexion', error);
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
    );
  }
}

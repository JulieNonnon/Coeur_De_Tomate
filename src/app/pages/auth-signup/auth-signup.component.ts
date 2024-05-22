import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrl: './auth-signup.component.css'
})
export class AuthSignupComponent {

  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  signup() {
    if(this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.authService.signup(this.name, this.email, this.password).subscribe(

      response => {
        console.log('Inscription réussie', response);
        //redirection vers page connexion
      },

      error => {
        console.error('Erreur lors de l\'inscription', error)
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription'
      }
    );
  }

}

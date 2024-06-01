import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if(this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas';
      return;
    }

    this.authService.signup(this.name, this.email, this.password).subscribe(

      response => {
        console.log('Inscription réussie', response);
        //redirection vers page connexion
        this.router.navigate(['/login'], { queryParams: { message: `Bienvenue ${this.name}, votre compte a été créé avec succès 👌✨! \n Vous pouvez à présent vous connecter via le formulaire de connexion ci-dessous.` } });
      },

      error => {
        console.error('Erreur lors de l\'inscription', error)
        this.errorMessage = 'Une erreur est survenue lors de l\'inscription'
      }
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../mocks/user.model';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrl: './auth-login.component.css'
})
export class AuthLoginComponent implements OnInit{

  email: string = '';
  password: string = '';
  errorMessage : string = '';
  successMessage: string = '';

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {}
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['message']) {
        this.successMessage = params['message'];
      }
    });
  }

  login() {
    //gestion redirection après connexion
    this.authService.login(this.email, this.password).subscribe(
      response => {
      console.log('Connecté avec succès', response);
      this.authService.setUser(response); // Stocker les informations de l'utilisateur
      if(response.is_admin) {
        this.router.navigate(['/admin-dashboard']); // redirige vers page admin-dashboard
      } else {
        this.router.navigate(['/user-profile']); // redirige vers page user-profile
      }
    },
      error => {
        console.error('Erreur de connexion', error);
        this.errorMessage = 'Email ou mot de passe incorrect';
      }
    );
  }
}

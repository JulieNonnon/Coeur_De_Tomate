// Ce garde de route permet l'accès aux routes de connexion et d'inscription uniquement si l'utilisateur n'est pas connecté.

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.authService.getCurrentUser();
    if (!currentUser) {
      return true;
    }
    return false;
  }
}

  
// VERSION PRECEDENTE
// canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//   const currentUser = this.authService.currentUserValue;
//   if (currentUser) {
//     //si connecté, l'utilisateur sera redirigé vers l'accueil
//     this.router.navigate(['/']);
//     return false;
//   } 
//     return true;
//   }


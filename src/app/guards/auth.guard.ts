// Ce garde de route permet l'accès aux routes protégées uniquement si l'utilisateur est connecté.

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      // Redirect to the appropriate dashboard based on user role
      if (currentUser.is_admin) {
        this.router.navigate(['/admin-dashboard']);
      } else {
        this.router.navigate(['/user-profile']);
      }
      return false;
    }
    return true;
  }
}

  // VERSION PRECEDENTE:
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   const currentUser = this.authService.currentUserValue;
  //   if (currentUser) {
  //     //verification si la route est restreinte par un role
  //     if(route.data['roles'] && route.data['role'].indexOf(currentUser.is_admin ? 'admin' : 'user') === -1 ) {
  //       //si le role n'est pas authorisé, retour à l'accueil
  //       this.router.navigate(['/']);
  //       return false;
  //     }
  //     return true;
  //   }

  //   //si non connecté, redirection vers la page login avec l'url de retour
  //   this.router.navigate(['/login'], {queryParams: { returnUrl: state.url}});
  //   return false;
  // }



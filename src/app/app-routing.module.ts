import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { LegalCgvComponent } from './pages/legal-cgv/legal-cgv.component';
import { LegalPrivacyPolicyComponent } from './pages/legal-privacy-policy/legal-privacy-policy.component';
import { LegalLegalNoticeComponent } from './pages/legal-legal-notice/legal-legal-notice.component';
import { LegalCookieManagementComponent } from './pages/legal-cookie-management/legal-cookie-management.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AuthSignupComponent } from './pages/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'all-categories', component: AllCategoriesComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'legal-privacy-policy', component: LegalPrivacyPolicyComponent },
  { path: 'legal-legal-notice', component: LegalLegalNoticeComponent },
  { path: 'legal-cookie-management', component: LegalCookieManagementComponent },
  { path: 'legal-cgv', component: LegalCgvComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'signup', component: AuthSignupComponent, canActivate: [NoAuthGuard] },
  { path: 'login', component: AuthLoginComponent, canActivate: [NoAuthGuard] },
  { path: 'error404', component: Error404Component },
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
  // { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  // { path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard], data: { roles: ['user'] }},
  { path: '**', redirectTo: '/error404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

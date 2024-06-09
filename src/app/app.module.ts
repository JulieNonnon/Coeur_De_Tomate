import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestGlobalCSSComponent } from './components/test-global-css/test-global-css.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './reusables/button/button.component';
import { BannerComponent } from './reusables/banner/banner.component';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrderSummaryComponent } from './pages/order-summary/order-summary.component';
import { BackToTopBtnComponent } from './components/back-to-top-btn/back-to-top-btn.component';
import { ProductCardComponent } from './reusables/product-card/product-card.component';
import { DeliveryInfosComponent } from './components/delivery-infos/delivery-infos.component';
import { CookieModalComponent } from './components/cookie-modal/cookie-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryCardComponent } from './reusables/category-card/category-card.component'
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LegalCgvComponent } from './pages/legal-cgv/legal-cgv.component';
import { LegalPrivacyPolicyComponent } from './pages/legal-privacy-policy/legal-privacy-policy.component';
import { LegalLegalNoticeComponent } from './pages/legal-legal-notice/legal-legal-notice.component';
import { LegalCookieManagementComponent } from './pages/legal-cookie-management/legal-cookie-management.component';
import { ProductDetailsCardComponent } from './reusables/product-details-card/product-details-card.component';
import { CounterComponent } from './components/counter/counter.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './pages/contact/contact.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AuthSignupComponent } from './pages/auth-signup/auth-signup.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { DialogAddProductComponent } from './components/dialog-add-product/dialog-add-product.component';
import { DialogEditProductComponent } from './components/dialog-edit-product/dialog-edit-product.component';
import { DialogDeleteConfirmComponent } from './components/dialog-delete-confirm/dialog-delete-confirm.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    TestGlobalCSSComponent,
    HeaderComponent,
    HomeComponent,
    Error404Component,
    FooterComponent,
    ButtonComponent,
    BannerComponent,
    AllCategoriesComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    OrderSummaryComponent,
    BackToTopBtnComponent,
    ProductCardComponent,
    DeliveryInfosComponent,
    CookieModalComponent,
    CategoryCardComponent,
    LegalCgvComponent,
    LegalPrivacyPolicyComponent,
    LegalLegalNoticeComponent,
    LegalCookieManagementComponent,
    ProductDetailsCardComponent,
    CounterComponent,
    BreadcrumbComponent,
    ContactComponent,
    ContactFormComponent,
    AuthSignupComponent,
    AuthLoginComponent,
    AdminDashboardComponent,
    UserProfileComponent,
    DialogAddProductComponent,
    DialogEditProductComponent,
    DialogDeleteConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

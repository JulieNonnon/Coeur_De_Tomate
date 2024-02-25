import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestGlobalCSSComponent } from './components/test-global-css/test-global-css.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
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
    LegalCookieManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../mocks/product.model';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../mocks/user.model';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  isDesktopView = true;
  showBurgerMenu = false;
  userName: string = '';
  lastProductTitle!: string;
  currentUser: User | null = null;
  
  constructor(
    private productService: ProductService, 
    private authService: AuthService,
    public cartService: CartService,
    private router: Router
  ) { }


  private checkScreenWidth(): void {
    this.isDesktopView = window.innerWidth > 430;
    this.showBurgerMenu = !this.isDesktopView;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.checkScreenWidth();
    
    //this.productService.getLastProduct().subscribe((lastProduct: Product) => {
      //this.lastProductTitle = lastProduct ? lastProduct.title : '';
    //});

    // this.authService.user.subscribe((user: User | null) => {
    //   if (user) {
    //     this.userName = user.name;
    //   } else {
    //     this.userName = '';
    //   }
    // });

    this.authService.user.subscribe(user => {
      this.currentUser = user;
    });
  }

    redirectToProfile() {
      if (this.currentUser) {
        if (this.currentUser.is_admin) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          this.router.navigate(['/user-profile']);
        }
      } else {
        this.router.navigate(['/login']);
      }
    }
  

  toggleMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
  }


  // Fonctionnalité search (WIP)
  searchTerm: string = '';

  onSubmit() {
    // future fonctionnalité barre de recherche
  }


}

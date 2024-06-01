import { Component, HostListener, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../mocks/product.model';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../mocks/user.model';

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
  
  constructor(private productService: ProductService, private authService: AuthService) { }


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

    this.authService.user.subscribe((user: User | null) => {
      if (user) {
        this.userName = user.name;
      } else {
        this.userName = '';
      }
    });
  }

  toggleMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
  }


  // Fonctionnalité search (WIP)
  searchTerm: string = '';

  onSubmit() {
    // Mettez en œuvre la logique de recherche ici, par exemple, vous pouvez émettre un événement
    // pour informer le composant parent de la recherche.
    // Vous pouvez également appeler une fonction de service pour effectuer la recherche.
  }


}

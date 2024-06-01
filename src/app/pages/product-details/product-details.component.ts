import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../mocks/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  product!: Product;
  pageTitle!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

// Configuration du ngOnInit pour la bonne récupération des éléments par id au lancement de la page product-details/:id
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Récupération de l'ID du produit depuis l'URL
      this.productService.getProductById(productId).subscribe(
        (product: Product) => {
          this.product = product; // Récupération du produit depuis le service
          this.pageTitle = `Graines de tomate ${this.product.title}`; // Construction du titre de la page
        },
        (error) => {
          console.error('Error loading product details:', error);
          this.router.navigateByUrl('/error404');
        }
      );
    });
  }
}
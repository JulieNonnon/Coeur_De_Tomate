import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private productService: ProductService
  ) { }

  // Configuration du ngOnInit pour la bonne récupération des éléments par id au lancement de la page product-details/:id
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const productId = +params['id']; // Récupération de l'ID du produit depuis l'URL
      this.product = this.productService.getProductById(productId); // Récupération du produit depuis le service
      this.pageTitle = `Graines de tomate ${this.product.title}`; // Construction du titre de la page
    });
  }
  
}


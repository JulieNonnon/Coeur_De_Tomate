import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../mocks/product.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit{


  products: Product[] = [];

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
  this.loadProducts();
  }

  loadProducts(): void{
    this.productService.getProducts().subscribe(products => {
    this.products = products;
    console.log(this.products);
    });
  }

/*
  deleteProduct(id: number): void {
      this.productService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      });
    }

// Ajoutez des méthodes pour créer et mettre à jour les produits selon vos besoins
}

*/

}
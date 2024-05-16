import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../mocks/product.model';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.css'
})
export class AllCategoriesComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
      console.log('Products:', this.products);
    });
  }
}

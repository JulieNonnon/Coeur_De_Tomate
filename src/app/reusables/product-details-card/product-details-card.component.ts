import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../mocks/product.model';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.css'
})
export class ProductDetailsCardComponent implements OnInit{
  
  @Input() productId!: number;
  @Input() product!: Product;
  productQuantity : number = 1;
  totalPrice: number = 1;
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProductDetails();
  }

  async loadProductDetails() {
    try {
      this.productService.getProductById(this.productId).subscribe((product: Product) => {
        this.product = product;
        this.calculateTotalPrice();
      }, error => {
        console.error('Error loading product details:', error);
      });
    } catch (error) {
      console.error('Error loading product details:', error);
    }
  }

  updateQuantity(quantity: number) {
    this.productQuantity = quantity;
    this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    this.totalPrice = this.product.price * this.productQuantity;
  }

}

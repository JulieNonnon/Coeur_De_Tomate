import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../mocks/product.model';
import { ProductService } from '../../services/product/product.service';
import { CartProduct, CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.css'
})
export class ProductDetailsCardComponent implements OnInit{
  
  @Input() productId!: number;
  @Input() product!: Product;
  productQuantity : number = 1;
  totalPrice: number = 0;
  
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.loadProductDetails();
  }

  async loadProductDetails() {
    try {
      this.productService.getProductById(this.productId).subscribe((product: Product) => {
        this.product = product;
        // Initialiser totalPrice avec le prix du produit
        this.totalPrice = this.product.price * this.productQuantity;
        //this.calculateTotalPrice();
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
    if (this.product) {
    this.totalPrice = this.product.price * this.productQuantity;
    }
  }


  addToCart() {
    if (!this.product) return;
    const cartProduct: CartProduct = {
      product: this.product,
      quantity: this.productQuantity
    }
    this.cartService.addToCart(cartProduct);
  }

}

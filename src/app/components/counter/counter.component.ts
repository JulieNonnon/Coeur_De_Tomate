import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { CartProduct, CartService } from '../../services/cart/cart.service';
import { Product } from '../../mocks/product.model';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  count: number = 1;
  product?: Product;
  @Input() quantity: number = 1; // Quantity per default : 1
  @Input() totalPrice: number = 0;
  @Output() quantityUpdate: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private productService: ProductService, 
    private cartService: CartService) {}

  //incrementation no more than 5
  increment() {
  if (this.quantity < 5) {
    this.quantity++;
    this.emitQuantity();
    }
  }

  //decrementation strictly no less than 0
  decrement() {
    if(this.count>0) {
      this.count--;
      this.emitQuantity();
    }
  }

  emitQuantity() {
    this.quantityUpdate.emit(this.quantity)
  }

  addToCart() {
    if (!this.product) return;
    const cartProduct: CartProduct = {
      product: this.product,
      quantity: this.quantity
    }
    this.cartService.addToCart(cartProduct);
  }

}

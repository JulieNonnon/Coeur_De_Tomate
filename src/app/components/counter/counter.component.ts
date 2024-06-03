import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  @Input() quantity: number = 1; // Quantity per default : 0
  @Input() totalPrice: number = 0;
  @Output() quantityUpdate: EventEmitter<number> = new EventEmitter<number>();

  //incrementation no more than 5
  increment() {
  if (this.quantity < 5) {
    this.quantity++;
    this.emitQuantity();
    }
  }

  //decrementation strictly no less than 0
  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
      this.emitQuantity();
    }
  }

  emitQuantity() {
    this.quantityUpdate.emit(this.quantity)
  }

}

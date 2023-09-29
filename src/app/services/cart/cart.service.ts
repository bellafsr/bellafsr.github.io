import { Injectable } from '@angular/core';

export interface Item {
    name: string;
    description: string;
    price: number;
    image: string;
    isDessert: boolean;
    isHamburguer: boolean;
    isDrink: boolean;
    ID: number;
    quantity?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDrawerState = false;
  items: Item[]= [
  
];

  addToCart(item: Item): void {
    this.items.push(item);
    this.openCart();
  }

  removeFromCart(id: number): void {
    this.items = this.items.filter((item) => item.ID !== id);
  }

  openCart(): void {
    this.cartDrawerState = true;
  }

  closeCart(): void {
    this.cartDrawerState = false;
  }

  get getSubTotal(): number {
    return this.items
      .map((item) => item.price * (item.quantity || 1))
      .reduce((prev, curr) => prev + curr, 0);
  }
}

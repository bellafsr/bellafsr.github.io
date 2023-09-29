import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [
    RouterModule,
    CurrencyPipe
  ]
})
export class MainComponent {
  constructor(
    public readonly cartService: CartService,
  ) { }
}

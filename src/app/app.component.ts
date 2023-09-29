import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from './services/cart/cart.service';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    SidebarModule
  ]
})
export class AppComponent {
  title = 'green-delivery';

  constructor(
    public readonly cartService: CartService,
  ) {}
}

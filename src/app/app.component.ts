import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from './services/cart/cart.service';
import { SidebarModule } from 'primeng/sidebar';

import { Router } from '@angular/router';

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
    public readonly router: Router,
  ) {}

  finishOrder(): void {
    this.router.navigate(['/delivery/finish-order']);
  }
}

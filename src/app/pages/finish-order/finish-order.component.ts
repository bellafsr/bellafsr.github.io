import { AfterContentInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';

import { StepsModule } from 'primeng/steps';
import { interval, skip, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-finish-order',
  standalone: true,
  templateUrl: './finish-order.component.html',
  styleUrls: ['./finish-order.component.scss'],
  imports: [
    CommonModule,
    StepsModule,
  ]
})
export class FinishOrderComponent implements AfterContentInit {
  activeItem = 0;
  items = [
    {
        label: 'Enviado',
        text: 'Seu pedido foi enviado!',
    },
    {
        label: 'Em preparação',
        text: 'Seu pedido foi recebido e está sendo preparado pelo restaurante, daqui a pouquinho já estará saindo!'
    },
    {
        label: 'Saiu para entrega',
        text: 'Seu pedido saiu pra entrega!'
    },
    {
      label: 'Recebido',
      text: 'Pedido recebido, aproveite seu lanche sustentável e volte sempre!'
    }
  ];

  constructor(
    public readonly cartService: CartService,
    public readonly router: Router,
  ) {}

  ngAfterContentInit(): void {
    setTimeout(() => {
      this.cartService.closeCart();
    }, 100);

    this.setNextStep();
    this.cartService.items = [];
  }

  setNextStep(): void {
    interval(3000)
      .pipe(
        skip(1),
        takeWhile((value) => value <= this.items.length - 2),
        tap((v) => {
          this.activeItem = v;
        })
      )
      .subscribe();
  }

  getDate(): string {
    const date = new Date();
    return `${date.getDate()}/0${date.getMonth() + 1}/${date.getFullYear()}`;
  }
}

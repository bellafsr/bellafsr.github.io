import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-store-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent {}

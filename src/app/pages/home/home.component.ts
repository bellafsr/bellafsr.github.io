import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StoreListComponent } from '../store-list/store-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    StoreListComponent,
  ]
})
export class HomeComponent {

}

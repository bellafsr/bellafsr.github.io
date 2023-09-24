import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { StoreComponent } from './app/pages/store/store.component';
import { AppComponent } from './app/app.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'store/:storeId',
    component: StoreComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];


  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(
        routes,
        withComponentInputBinding()
      ),
    ]
  });
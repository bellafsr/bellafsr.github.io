import { bootstrapApplication } from '@angular/platform-browser';
import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { HomeComponent } from './app/pages/home/home.component';
import { LoginComponent } from './app/pages/login/login.component';
import { StoreComponent } from './app/pages/store/store.component';
import { AppComponent } from './app/app.component';
import { MainComponent } from './app/pages/main/main.component';
import { StoreListComponent } from './app/pages/store-list/store-list.component';
import { provideAnimations } from '@angular/platform-browser/animations';

// TODO: Create Main Component with header
// TODO: Create Store List component and replicate at home component
// TODO: Create Store Details Page.

// TODO: Mount Store Details Page
// TODO: Create Cart and Add Items on it
// TODO: Create Finish Order Page
// TODO: Create Received Order Page

// TODO: Publish Website at github Pages.

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: MainComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'stores',
        component: StoreListComponent
      },
      {
        path: 'store/:storeId',
        component: StoreComponent
      },
    ]
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
      provideAnimations()
    ]
  });
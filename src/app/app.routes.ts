import { Routes } from '@angular/router';
import { HomePageComponent } from './features/home/pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title: "ESAN MEN'S WEAR | Men's Clothing Store in Thoothukudi"
  },
  {
    path: '**',
    redirectTo: ''
  }
];

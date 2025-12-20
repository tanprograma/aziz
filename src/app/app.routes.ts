import { Routes } from '@angular/router';
import { Home } from './pages/home/home';

import { RenderMode } from '@angular/ssr';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    component: Home,
  },

  //   {
  //     path: 'view-tracer/:tracerID',
  //     component: TracerManageComponent,
  //   },
  //   {
  //     path: 'statistics',
  //     component: StatisticsComponent,
  //     loadChildren: () =>
  //       import('./routes/statistics.routes').then((mod) => mod.routes),
  //   },
  //   { path: 'login', component: LoginComponent },
  //   {
  //     path: 'admin',
  //     component: AdminComponent,
  //     loadChildren: () =>
  //       import('./routes/admin.routes').then((mod) => mod.routes),
  //   },
  //   {
  //     path: 'shop/:name/:id',
  //     component: ShopComponent,
  //     loadChildren: () =>
  //       import('./routes/shop.routes').then((mod) => mod.routes),
  //   },
];

import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/auth/auth.component').then((c) => c.AuthComponent),
  },
  {
    path: 'main',
    loadComponent: () =>
      import('./pages/main/main.component').then((c) => c.MainComponent),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

export const appRoutingProviders = [provideRouter(routes)];

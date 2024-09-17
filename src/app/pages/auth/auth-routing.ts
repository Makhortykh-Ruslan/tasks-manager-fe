import { Routes } from '@angular/router';
import { appRoutes } from '@core/constants/routes';

import { AuthComponent } from './auth.component';

const children: Routes = [
  {
    path: appRoutes.login.routerPath,
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: appRoutes.registration.routerPath,
    loadComponent: () =>
      import('./pages/registration/registration.component').then(
        (c) => c.RegistrationComponent,
      ),
  },
  {
    path: '**',
    redirectTo: appRoutes.login.routerPath,
    pathMatch: 'full',
  },
];

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children,
  },
];

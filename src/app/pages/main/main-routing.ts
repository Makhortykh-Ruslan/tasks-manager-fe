import { Routes } from '@angular/router';
import { appRoutes } from '@core/constants/routes';
import { MainComponent } from './main.component';

const children: Routes = [
  {
    path: '',
    redirectTo: appRoutes.user.routerPath,
    pathMatch: 'full',
  },
  {
    path: appRoutes.admin.routerPath,
    loadComponent: () =>
      import('./pages/admin-page/admin-page.component').then(
        (c) => c.AdminPageComponent,
      ),
  },
  {
    path: appRoutes.user.routerPath,
    loadChildren: () =>
      import('./pages/user-page/user-routing').then((r) => r.USER_ROUTES),
  },
];

export const MAIN_ROUTES: Routes = [
  {
    path: '',
    component: MainComponent,
    children,
  },
];

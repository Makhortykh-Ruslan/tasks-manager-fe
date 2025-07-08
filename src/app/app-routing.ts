import { provideRouter, Routes } from '@angular/router';
import { appRoutes } from '@core/constants/routes';

import { environment } from '../environments/environment';
import { SessionGuard } from '@core/guards/session.guard';

const devRoutes = [
  {
    path: appRoutes.icons.routerPath,
    loadComponent: () =>
      import(
        '../tm-icons/icons-preview/icons-preview.component'
      ).then((c) => c.IconsPreviewComponent),
  },
] as Routes;

const baseRoutes = [
  {
    path: appRoutes.auth.routerPath,
    loadChildren: () =>
      import('./pages/auth/auth-routing').then((r) => r.AUTH_ROUTES),
  },
  {
    path: '',
    canActivate: [SessionGuard],
    loadChildren: () =>
      import('./pages/main/main-routing').then((r) => r.MAIN_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
] as Routes;

export const routes: Routes = environment.production
  ? baseRoutes
  : [...devRoutes, ...baseRoutes];

export const appRoutingProviders = [provideRouter(routes)];

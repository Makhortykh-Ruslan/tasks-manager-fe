import { provideRouter, Routes } from '@angular/router';
import { appRoutes } from '@core/constants/routes';

import { environment } from '../environments/environment';
import { SessionGuard } from '@core/guards/session.guard';

const routes = (): Routes => {
  const res: Routes = [
    {
      path: appRoutes.icons.routerPath,
      loadComponent: () =>
        import('../tm-icons/icons-preview/icons-preview.component').then(
          (c) => c.IconsPreviewComponent,
        ),
    },
    {
      path: appRoutes.auth.routerPath,
      loadChildren: () => import('./pages/auth/auth-routing').then((r) => r.AUTH_ROUTES),
    },
    {
      path: '',
      loadChildren: () => import('./pages/main/main-routing').then((r) => r.MAIN_ROUTES),
      canActivate: [SessionGuard],
    },
    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full',
    },
  ];

  if (environment.production) {
    res.unshift();
  }

  return res;
};

export const appRoutingProviders = [provideRouter(routes())];

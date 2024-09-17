import { provideRouter, Routes } from '@angular/router';
import { appRoutes } from '@core/constants/routes';

import { environment } from '../environments/environment';

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
      // path: appRoutes.auth.routerPath,
      path: '',
      loadChildren: () =>
        import('./pages/auth/auth-routing').then((r) => r.AUTH_ROUTES),
    },
    // {
    //   path: '',
    //   loadComponent: () =>
    //     import('./pages/main/main.component').then((c) => c.MainComponent),
    // },
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

import { Routes } from '@angular/router';
import { appRoutes } from '@core/constants/routes';
import { UserPageComponent } from './user-page.component';
import { provideStates } from '@ngxs/store';
import { NotesState } from './store/notes.state';

const children: Routes = [
  {
    path: '',
    redirectTo: appRoutes.notes.routerPath,
    pathMatch: 'full',
  },
  {
    path: appRoutes.notes.routerPath,
    loadComponent: () =>
      import('./pages/notes-page/notes-page.component').then(
        (c) => c.NotesPageComponent,
      ),
  },
  {
    path: appRoutes.reminders.routerPath,
    loadComponent: () =>
      import('./pages/reminders-page/reminders-page.component').then(
        (c) => c.RemindersPageComponent,
      ),
  },
  {
    path: appRoutes.archive.routerPath,
    loadComponent: () =>
      import('./pages/archive-page/archive-page.component').then(
        (c) => c.ArchivePageComponent,
      ),
  },
  {
    path: appRoutes.removed.routerPath,
    loadComponent: () =>
      import('./pages/removed-page/removed-page.component').then(
        (c) => c.RemovedPageComponent,
      ),
  },
];

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserPageComponent,
    children,
    providers: [provideStates([NotesState])],
  },
];

type AuthRoutingPath = 'auth' | 'login' | 'registration';

type RolePageRoutingPath = 'admin' | 'user';

type MainPageRoutingPath = 'notes' | 'reminders' | 'archive' | 'removed' | 'settings';

type CoreRoutingPath = 'icons';

export type AppRouting =
  | AuthRoutingPath
  | CoreRoutingPath
  | RolePageRoutingPath
  | MainPageRoutingPath;

export const appRoutes: Record<
  AppRouting,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  // Auth routing //
  auth: {
    routerPath: 'auth',
  },
  login: {
    routerPath: 'login',
  },
  registration: {
    routerPath: 'registration',
  },

  // Roles routing //
  admin: {
    routerPath: 'admin',
  },
  user: {
    routerPath: 'user',
  },

  icons: {
    routerPath: 'icons',
  },

  // Main routing //
  notes: { routerPath: 'notes' },
  reminders: { routerPath: 'reminders' },
  archive: { routerPath: 'archive' },
  removed: { routerPath: 'removed' },
  settings: { routerPath: 'settings' },
};

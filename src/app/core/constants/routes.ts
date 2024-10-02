type AuthRoutingPath = 'auth' | 'login' | 'registration';

type CoreRoutingPath = 'icons';

export type AppRouting = AuthRoutingPath | CoreRoutingPath;

export const appRoutes: Record<
  AppRouting,
  {
    routerPath: string;
    fullPath?: string;
  }
> = {
  auth: {
    routerPath: 'auth',
  },
  login: {
    routerPath: 'login',
  },
  registration: {
    routerPath: 'registration',
  },

  icons: {
    routerPath: 'icons',
  },
};

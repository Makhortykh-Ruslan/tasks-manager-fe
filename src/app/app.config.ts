import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';

import { environment } from '../environments/environment';

import { appRoutingProviders } from './app-routing';
import { UserState } from '@core/store/user-store/user.state';
import { apiInterceptor, errorInterceptor } from '@core/interceptors';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AuthState } from '@core/store/auth-store/auth.state';

export const appConfig = {
  providers: [
    ...appRoutingProviders,
    provideAnimations(),
    provideHttpClient(withInterceptors([apiInterceptor, errorInterceptor])),
    provideStore(
      [UserState, AuthState],
      {
        developmentMode: !environment.production,
      },
      withNgxsReduxDevtoolsPlugin({
        disabled: environment.production,
      }),
    ),
  ],
};

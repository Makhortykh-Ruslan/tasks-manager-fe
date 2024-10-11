import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { ApiInterceptor } from '@core/interceptors/api.interceptor';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';

import { appRoutingProviders } from './app-routing';
import { ErrorInterceptor } from '@core/interceptors/error.interceptor';
import { UserState } from '@core/store/user-store/user.state';

export const appConfig: ApplicationConfig = {
  providers: [
    ...appRoutingProviders,
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      NgxsModule.forRoot([UserState], {
        developmentMode: !environment.production,
      }),
    ),
    importProvidersFrom(
      NgxsReduxDevtoolsPluginModule.forRoot({
        disabled: environment.production,
      }),
    ),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
};

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { ApplicationConfig } from '@angular/platform-browser';
import { ApiInterceptor } from '@core/interceptors/api.interceptor';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';

import { environment } from '../environments/environment';

import { appRoutingProviders } from './app-routing';

export const appConfig: ApplicationConfig = {
  providers: [
    ...appRoutingProviders,
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      NgxsModule.forRoot([], {
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
  ],
};

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ApiInterceptor } from '@core/interceptors/api.interceptor';

import { appRoutingProviders } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    ...appRoutingProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
}).catch((err) => console.error(err));

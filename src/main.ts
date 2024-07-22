import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appRoutingProviders } from './app/app-routing';
import {environment} from "./environments/environment";
import {enableProdMode} from "@angular/core";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    ...appRoutingProviders
  ]
}).catch(err => console.error(err));

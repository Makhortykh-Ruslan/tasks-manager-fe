import {
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { appRoutes } from '@core/constants';
import { AlertService } from '@core/services';

export const errorInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const router = inject(Router);
  const alertService = inject(AlertService);

  return next(req).pipe(
    catchError((responseError: HttpErrorResponse) => {
      const { status, error } = responseError;
      switch (status) {
        case 401:
          router.navigate([appRoutes.auth.routerPath]);
          alertService.throwError(error.message);
          break;
        case 404:
          alertService.throwError(error.message);
          break;
        case 400:
          alertService.throwError(error.message);
          break;
        case 403:
          alertService.throwError(error.message);
          break;
        case 0:
          router.navigate([appRoutes.auth.routerPath]);
          break;
      }
      return of(error.error);
    }),
  );
};

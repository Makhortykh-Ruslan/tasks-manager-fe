import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { appRoutes } from '@core/constants';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  private router = inject(Router);

  public intercept<T>(
    req: HttpRequest<T>,
    next: HttpHandler,
  ): Observable<HttpEvent<T>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error', error.status);
        switch (error.status) {
          case 401:
            this.router.navigate([appRoutes.auth.routerPath]);
            alert('No auth');
            break;
          case 0:
            this.router.navigate([appRoutes.auth.routerPath]);
            break;
        }
        return of(error.error);
      }),
    );
  }
}

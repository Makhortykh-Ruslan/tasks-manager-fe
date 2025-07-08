import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

export const apiInterceptor = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const modifiedReq = req.clone({
    url: req.url.replace('api', environment.domain_url),
  });
  return next(modifiedReq);
};

import { Injectable } from '@angular/core';
import { AbstractHttpRequests } from '@core/abstract';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService extends AbstractHttpRequests {
  public login(model: any): Observable<any> {
    return this.httpPostRequest(`api/login`, model);
  }
}

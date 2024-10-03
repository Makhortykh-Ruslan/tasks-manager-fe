import { Injectable } from '@angular/core';
import { AbstractHttpRequests } from '@core/abstract';
import { Observable } from 'rxjs';
import { ResponseModelUser } from '@core/types';

@Injectable({
  providedIn: 'root',
})
export class UserService extends AbstractHttpRequests {
  public requestUserSelf(): Observable<ResponseModelUser> {
    return this.httpGetRequest(`api/user/me`);
  }
}

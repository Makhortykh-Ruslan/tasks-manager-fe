import { Injectable } from '@angular/core';
import { AbstractHttpRequests } from '@core/abstract';
import { Observable } from 'rxjs';
import { IUser } from '@core/interfaces/i-user';
import { ResponseModelCreateUser } from '@core/types';

@Injectable()
export class AuthService extends AbstractHttpRequests {
  public login(model: IUser): Observable<any> {
    return this.httpPostRequest(`api/auth/login`, model);
  }

  public registrationUser(model: IUser): Observable<ResponseModelCreateUser> {
    return this.httpPostRequest(`api/user/create`, model);
  }
}

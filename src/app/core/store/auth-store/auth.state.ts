import { Injectable } from '@angular/core';
import { LocalStorageKeys } from '@core/enums/localStorageKeys';
import { AuthSpace } from '@core/store/auth-store/auth.actions';
import { Action, Selector, State, StateContext } from '@ngxs/store';

import { AuthStateModel, DEFAULT_AUTH_STATE } from './auth.model';

@State({
  name: 'auth',
  defaults: DEFAULT_AUTH_STATE,
})
@Injectable()
export class AuthState {
  @Selector([AuthState])
  public static token(state: AuthStateModel): string {
    return state.access_token || '';
  }

  @Action(AuthSpace.SetAccessToken)
  SetAccessToken(
    { patchState }: StateContext<AuthStateModel>,
    { payload }: AuthSpace.SetAccessToken,
  ) {
    localStorage.setItem(
      LocalStorageKeys.ACCESS_TOKEN,
      payload.token,
    );

    return patchState({
      access_token: payload.token,
    });
  }
}

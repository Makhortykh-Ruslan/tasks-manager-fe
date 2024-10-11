import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  DEFAULT_USER_STATE,
  UserStateModel,
} from '@core/store/user-store/user.model';
import { UserSpace } from '@core/store/user-store/user.actions';
import { UserService } from '@core/services';
import { UserAdapters } from '@core/adapters/user-adapters';
import { map, tap } from 'rxjs';
import { IUser } from '@core/interfaces/i-user';
import { LocalStorageKeys } from '@core/enums/localStorageKeys';

@State({
  name: 'user',
  defaults: DEFAULT_USER_STATE,
})
@Injectable()
export class UserState {
  private userService = inject(UserService);

  @Selector([UserState])
  public static currentUser(currentUser: UserStateModel): IUser {
    return currentUser.currentUser as IUser;
  }

  @Action(UserSpace.GetCurrentUser)
  GetCurrentUser({ patchState }: StateContext<UserStateModel>) {
    return this.userService.requestUserSelf().pipe(
      map(UserAdapters.transformUserSelf.bind(this)),
      tap((currentUser) => patchState({ currentUser })),
    );
  }

  @Action(UserSpace.ResetCurrentUser)
  ResetCurrentUser({ patchState }: StateContext<UserStateModel>) {
    localStorage.removeItem(LocalStorageKeys.ACCESS_TOKEN);
    patchState({ currentUser: null });
  }
}

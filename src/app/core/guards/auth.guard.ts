import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserSpace } from '@core/store/user-store/user.actions';
import { UserState } from '@core/store/user-store/user.state';

export const SessionGuard: CanMatchFn = (): Observable<boolean> => {
  const store = inject(Store);
  return store.dispatch(new UserSpace.GetCurrentUser()).pipe(
    switchMap(() => store.select(UserState.currentUser)),
    map((response) => !!response),
  );
};

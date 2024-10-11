import { inject } from '@angular/core';
import { CanMatchFn } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { UserSpace } from '@core/store/user-store/user.actions';
import { UserState } from '@core/store/user-store/user.state';
import { MainLoaderService } from '@core/services';

export const SessionGuard: CanMatchFn = (): Observable<boolean> => {
  const store = inject(Store);
  const mainLoaderService = inject(MainLoaderService);

  mainLoaderService.setLoaderState(true);

  return store.dispatch(new UserSpace.GetCurrentUser()).pipe(
    switchMap(() => store.select(UserState.currentUser)),
    map((response) => !!response),
    tap(() => mainLoaderService.setLoaderState(false)),
  );
};

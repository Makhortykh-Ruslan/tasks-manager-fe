import { USER_ACTIONS } from '@core/store/user-store/user.model';

export namespace UserSpace {
  export class GetCurrentUser {
    static readonly type = USER_ACTIONS.GET_CURRENT_USER;
  }

  export class ResetCurrentUser {
    static readonly type = USER_ACTIONS.RESET_CURRENT_USER;
  }
}

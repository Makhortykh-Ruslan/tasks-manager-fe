import { IAuthSuccessModel } from '@core/models/auth.model';
import { AUTH_ACTIONS } from '@core/store/auth-store/auth.model';

export namespace AuthSpace {
  export class SetAccessToken {
    static readonly type = AUTH_ACTIONS.SET_ACCESS_TOKEN;
    constructor(public readonly payload: IAuthSuccessModel) {}
  }
}

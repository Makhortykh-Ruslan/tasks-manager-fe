import { IUser } from '@core/interfaces/i-user';

export interface UserStateModel {
  currentUser: IUser | null;
}

export const DEFAULT_USER_STATE: UserStateModel = {
  currentUser: null,
};

export enum USER_ACTIONS {
  GET_CURRENT_USER = '[user] GET CURRENT USER',
}

import { ResponseModelUser } from '@core/types';
import { IUser } from '@core/interfaces/i-user';

export class UserAdapters {
  static transformUserSelf = (data: ResponseModelUser): IUser => data.model;
}

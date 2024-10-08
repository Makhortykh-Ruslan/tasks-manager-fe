import { TMRoles } from '@core/enums/roles';

export interface IUser {
  userName: string;
  password: string;
  email: string;
  role: TMRoles;
  _id: string;
}

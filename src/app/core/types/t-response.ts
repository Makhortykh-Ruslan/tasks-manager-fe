import { IAuthSuccessModel, ResponseModel } from '@core/models';
import { IUser } from '@core/interfaces/i-user';

export type ResponseModelUser = ResponseModel<IUser>;

export type ResponseModelCreateUser = ResponseModel<IAuthSuccessModel>;

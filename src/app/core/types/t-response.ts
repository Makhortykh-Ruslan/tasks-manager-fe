import { IAuthSuccessModel, ResponseModel } from '@core/models';
import { IUser } from '@core/interfaces/i-user';
import { INote } from '@core/interfaces/i-note';

export type ResponseModelUser = ResponseModel<IUser>;

export type ResponseModelCreateUser = ResponseModel<IAuthSuccessModel>;

export type ResponseModelNote = ResponseModel<INote>;

export type ResponseModelNotes = ResponseModel<INote[]>;

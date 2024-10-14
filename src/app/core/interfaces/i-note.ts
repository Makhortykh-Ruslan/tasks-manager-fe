import { IPosition } from '@core/interfaces/i-position';

export interface INote {
  title: string;
  description: string;
  dueDate: Date;
  status: string;
  createdAt: Date;
  userId: string;
  _id: string;
  dragPosition: IPosition;
}

import { INote } from '@core/interfaces/i-note';
import { ActionsName } from '@core/enums/actionsName';

export interface NoteActionModel {
  data: INote;
  action: ActionsName;
}

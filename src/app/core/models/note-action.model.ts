import { INote } from '@core/interfaces/i-note';
import { TNoteActionsName } from '@core/types';

export interface NoteActionModel {
  data: INote;
  action: TNoteActionsName;
}

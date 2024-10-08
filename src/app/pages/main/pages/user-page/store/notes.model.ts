import { ResponseModelNotes } from '@core/types';
import { DEFAULT_RESPONSE_MODEL } from '@core/constants';

export interface NotesStateModel {
  notes: ResponseModelNotes;
}

export const DEFAULT_NOTES_STATE: NotesStateModel = {
  notes: DEFAULT_RESPONSE_MODEL,
};

export enum NOTES_ACTIONS {
  CREATE_NOTE = '[notes] CREATE NOTES',
  GET_NOTES = '[notes] GET NOTES',
}

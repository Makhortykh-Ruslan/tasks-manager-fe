import { ResponseModelNotes } from '@core/types';
import { DEFAULT_RESPONSE_MODEL } from '@core/constants';

export interface NotesStateModel {
  notes: ResponseModelNotes;
}

export const DEFAULT_NOTES_STATE: NotesStateModel = {
  notes: DEFAULT_RESPONSE_MODEL,
};

export enum NOTES_ACTIONS {
  GET_NOTES = '[notes] GET NOTES',
  ADD_NOTE = '[notes] ADD NOTE',
  DELETE_NOTE = '[notes] DELETE NOTE',
  RESET_NOTES = '[notes] RESET NOTES',
  UPDATE_NOTE = '[notes] UPDATE NOTE',
  UPDATE_NOTES = '[notes] UPDATE NOTES',
}

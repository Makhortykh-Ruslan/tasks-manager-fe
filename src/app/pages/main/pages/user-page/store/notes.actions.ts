import { NOTES_ACTIONS } from './notes.model';
import { INote } from '@core/interfaces/i-note';

export namespace NotesSpace {
  export class CreateNote {
    static readonly type = NOTES_ACTIONS.CREATE_NOTE;
    constructor(public readonly payload: INote) {}
  }

  export class GetNotes {
    static readonly type = NOTES_ACTIONS.GET_NOTES;
  }
}

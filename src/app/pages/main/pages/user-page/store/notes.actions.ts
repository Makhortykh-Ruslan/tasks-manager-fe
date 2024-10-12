import { NOTES_ACTIONS } from './notes.model';
import { INote } from '@core/interfaces/i-note';

export namespace NotesSpace {
  export class GetNotes {
    static readonly type = NOTES_ACTIONS.GET_NOTES;
  }

  export class AddNote {
    static readonly type = NOTES_ACTIONS.ADD_NOTE;
    constructor(public readonly payload: INote) {}
  }

  export class DeleteNote {
    static readonly type = NOTES_ACTIONS.DELETE_NOTE;
    constructor(public readonly payload: number) {}
  }

  export class ResetNotes {
    static readonly type = NOTES_ACTIONS.RESET_NOTES;
  }
}

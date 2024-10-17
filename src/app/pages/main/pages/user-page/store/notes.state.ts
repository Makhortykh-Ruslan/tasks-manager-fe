import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DEFAULT_NOTES_STATE, NotesStateModel } from './notes.model';
import { NotesSpace } from './notes.actions';
import { NotesService } from '../services/notes.service';
import { tap } from 'rxjs';
import { ResponseModelNotes } from '@core/types';
import { DEFAULT_RESPONSE_MODEL } from '@core/constants';

@State({
  name: 'notesState',
  defaults: DEFAULT_NOTES_STATE,
})
@Injectable()
export class NotesState {
  private notesService = inject(NotesService);

  @Selector([NotesState])
  public static notes(notes: NotesStateModel): ResponseModelNotes {
    return notes.notes;
  }

  @Action(NotesSpace.AddNote)
  AddNote(
    { patchState, getState }: StateContext<NotesStateModel>,
    { payload }: NotesSpace.AddNote,
  ) {
    patchState({
      notes: {
        ...getState().notes,
        model: [payload, ...getState().notes.model],
      },
    });
  }

  @Action(NotesSpace.DeleteNote)
  DeleteNote(
    { patchState, getState }: StateContext<NotesStateModel>,
    { payload }: NotesSpace.DeleteNote,
  ) {
    const state = getState().notes;
    const model = [...state.model];
    model.splice(payload, 1);

    patchState({
      notes: { ...state, model },
    });
  }

  @Action(NotesSpace.GetNotes)
  GetNotes({ patchState }: StateContext<NotesStateModel>) {
    return this.notesService
      .getNotes()
      .pipe(tap((notes) => patchState({ notes })));
  }

  @Action(NotesSpace.ResetNotes)
  ResetNotes({ patchState }: StateContext<NotesStateModel>) {
    patchState({
      notes: DEFAULT_RESPONSE_MODEL,
    });
  }

  @Action(NotesSpace.UpdateNote)
  UpdateNote(
    { patchState, getState }: StateContext<NotesStateModel>,
    { note, idx }: NotesSpace.UpdateNote,
  ) {
    const state = getState().notes;
    const model = [...state.model];
    model[idx] = note;

    patchState({
      notes: { ...state, model },
    });

    return this.notesService.updateNote(note);
  }

  @Action(NotesSpace.UpdateNotes)
  UpdateNotes(
    { patchState }: StateContext<NotesStateModel>,
    { payload }: NotesSpace.UpdateNotes,
  ) {
    patchState({ notes: payload });
  }
}

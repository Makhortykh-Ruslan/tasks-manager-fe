import { inject, Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DEFAULT_NOTES_STATE, NotesStateModel } from './notes.model';
import { NotesSpace } from './notes.actions';
import { NotesService } from '../services/notes.service';
import { tap } from 'rxjs';
import { ResponseModelNotes } from '@core/types';

@State({
  name: 'notes',
  defaults: DEFAULT_NOTES_STATE,
})
@Injectable()
export class NotesState {
  private notesService = inject(NotesService);

  @Selector([NotesState])
  public static notes(notes: NotesStateModel): ResponseModelNotes {
    return notes.notes;
  }

  @Action(NotesSpace.CreateNote)
  CreateNote(
    ctx: StateContext<NotesStateModel>,
    { payload }: NotesSpace.CreateNote,
  ) {
    return this.notesService.createNote(payload);
  }

  @Action(NotesSpace.GetNotes)
  GetNotes({ patchState }: StateContext<NotesStateModel>) {
    return this.notesService.getNotes().pipe(
      tap((notes) => {
        patchState({ notes });
      }),
    );
  }
}

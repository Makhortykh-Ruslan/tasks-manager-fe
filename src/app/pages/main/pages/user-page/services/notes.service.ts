import { Injectable } from '@angular/core';
import { AbstractHttpRequests } from '@core/abstract';
import { Observable } from 'rxjs';
import { INote } from '@core/interfaces/i-note';
import { ResponseModelNote, ResponseModelNotes } from '@core/types';

@Injectable({
  providedIn: 'root',
})
export class NotesService extends AbstractHttpRequests {
  public createNote(model: INote): Observable<ResponseModelNote> {
    return this.httpPostRequest('api/tasks', model);
  }

  public getNotes(): Observable<ResponseModelNotes> {
    return this.httpGetRequest('api/tasks');
  }
}

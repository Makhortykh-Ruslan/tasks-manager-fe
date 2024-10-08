import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { InputComponent } from '@core/components/input/input.component';
import { TmIconModule } from '@icons/tm-icon.module';
import { placeholders } from '@core/enums';
import { ButtonDirective } from '@core/directives/button.directive';
import { NgIf } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NoteModalComponent } from './components/note-modal/note-modal.component';
import { filter, finalize, switchMap, take, tap } from 'rxjs';
import { Store } from '@ngxs/store';
import { NotesSpace } from '../../store/notes.actions';
import { INote } from '@core/interfaces/i-note';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { NotesState } from '../../store/notes.state';
import { ResponseModelNotes } from '@core/types';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [
    InputComponent,
    TmIconModule,
    ButtonDirective,
    NgIf,
    LoaderComponent,
  ],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesPageComponent implements OnInit {
  public isShowLoading = signal<boolean>(false);
  public notes: Signal<ResponseModelNotes> = this.store.selectSignal(
    NotesState.notes,
  );

  constructor(
    private dialog: MatDialog,
    private store: Store,
  ) {}

  public placeholders = placeholders;

  public ngOnInit(): void {
    this.initData();
  }

  public onOpenNoteModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    this.dialog
      .open(NoteModalComponent, dialogConfig)
      .afterClosed()
      .pipe(
        take(1),
        filter(Boolean),
        tap(() => this.isShowLoading.set(true)),
        switchMap((response: INote) =>
          this.store.dispatch(new NotesSpace.CreateNote(response)),
        ),
        switchMap(() => this.store.dispatch(new NotesSpace.GetNotes())),
        finalize(() => this.isShowLoading.set(false)),
      )
      .subscribe();
  }

  private initData(): void {
    this.isShowLoading.set(true);

    this.store
      .dispatch(new NotesSpace.GetNotes())
      .pipe(
        take(1),
        finalize(() => this.isShowLoading.set(false)),
      )
      .subscribe();
  }
}

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
import { NoteCardComponent } from './components/note-card/note-card.component';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { AlertService } from '@core/services';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [
    InputComponent,
    TmIconModule,
    ButtonDirective,
    NgIf,
    LoaderComponent,
    NoteCardComponent,
    CdkDrag,
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

  public placeholders = placeholders;

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private alertService: AlertService,
    private notesService: NotesService,
  ) {}

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
          this.notesService.createNote(response),
        ),
        tap((response) => {
          this.store.dispatch(new NotesSpace.AddNote(response.model));
          this.alertService.throwSuccess(response.message);
        }),
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

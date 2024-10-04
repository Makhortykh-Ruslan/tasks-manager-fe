import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputComponent } from '@core/components/input/input.component';
import { TmIconModule } from '@icons/tm-icon.module';
import { placeholders } from '@core/enums';
import { ButtonDirective } from '@core/directives/button.directive';
import { NgIf } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NoteModalComponent } from './components/note-modal/note-modal.component';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [InputComponent, TmIconModule, ButtonDirective, NgIf],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesPageComponent {
  public placeholders = placeholders;

  private dialog = inject(MatDialog);

  public onOpenNoteModal(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    this.dialog.open(NoteModalComponent, dialogConfig);
  }
}

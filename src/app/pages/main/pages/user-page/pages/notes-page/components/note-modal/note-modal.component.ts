import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';
import { MatDialogRef } from '@angular/material/dialog';
import { TmIconModule } from '@icons/tm-icon.module';
import { TextareaComponent } from '@core/components/textarea/textarea.component';
import { controlNames, labels, placeholders } from '@core/enums';
import { InputComponent } from '@core/components/input/input.component';
import { NoteFormGroupService } from '../../services/note-form-group.service';
import { AbstractErrorMessages } from '@core/abstract';
import { ControlConverterPipe } from '@core/pipes';
import { Store } from '@ngxs/store';
import { UserState } from '@core/store/user-store/user.state';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [
    ButtonDirective,
    TmIconModule,
    TextareaComponent,
    InputComponent,
    ControlConverterPipe,
  ],
  providers: [NoteFormGroupService],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteModalComponent
  extends AbstractErrorMessages
  implements OnInit
{
  private store = inject(Store);
  private dialogRef = inject(MatDialogRef<NoteModalComponent>);
  private noteFormGroupService = inject(NoteFormGroupService, { self: true });

  public LABELS = labels;
  public PLACEHOLDER = placeholders;
  public CONTROL_NAME = controlNames;

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('note-modal');

    this.initData();
  }

  public handleClose(): void {
    this.dialogRef.close();
  }

  public handleAddNote(): void {
    this.dialogRef.close({
      ...this.formGroup.getRawValue(),
      userId: this.store.selectSnapshot(UserState.currentUser)._id,
    });
  }

  private initData(): void {
    this.noteFormGroupService.initNoteFormGroup();
    this.formGroup = this.noteFormGroupService.getNoteFormGroup();
  }
}

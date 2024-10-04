import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ButtonDirective } from '@core/directives/button.directive';
import { MatDialogRef } from '@angular/material/dialog';
import { TmIconModule } from '@icons/tm-icon.module';

@Component({
  selector: 'app-note-modal',
  standalone: true,
  imports: [ButtonDirective, TmIconModule],
  templateUrl: './note-modal.component.html',
  styleUrl: './note-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteModalComponent implements OnInit {
  private dialogRef = inject(MatDialogRef<NoteModalComponent>);

  public ngOnInit(): void {
    this.dialogRef.addPanelClass('note-modal');
  }

  public handleClose(): void {
    this.dialogRef.close();
  }
}

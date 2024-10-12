import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
  output,
} from '@angular/core';
import { INote } from '@core/interfaces/i-note';
import { NgIf } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { TmIconModule } from '@icons/tm-icon.module';
import { TNoteActionsName } from '@core/types/t-note-actions-name';
import { NoteActionModel } from '@core/models';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [NgIf, CdkDrag, TmIconModule],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCardComponent {
  public data = input.required<INote>();
  public dragClass = input.required<string>();

  // actions = output<NoteActionModel>();
  @Output() actions = new EventEmitter<NoteActionModel>();

  public handleAction(action: TNoteActionsName): void {
    this.actions.emit({
      data: this.data(),
      action,
    });
  }
}

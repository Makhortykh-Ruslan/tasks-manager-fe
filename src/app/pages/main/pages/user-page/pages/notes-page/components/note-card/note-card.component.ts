import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { INote } from '@core/interfaces/i-note';
import { NgIf } from '@angular/common';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { TmIconModule } from '@icons/tm-icon.module';
import { NoteActionModel } from '@core/models';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { ActionsName, actionsName } from '@core/enums';

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

  public outputActions = output<NoteActionModel>();
  public ACTIONS_NAME = actionsName;

  public onDragEnd(event: CdkDragEnd): void {
    const { x, y } = event.source.getFreeDragPosition();
    this.outputActions.emit({
      data: {
        ...this.data(),
        dragPosition: { x, y },
      },
      action: this.ACTIONS_NAME.UPDATE,
    });
  }

  public handleAction(action: ActionsName): void {
    this.outputActions.emit({
      data: this.data(),
      action,
    });
  }
}

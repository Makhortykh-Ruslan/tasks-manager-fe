import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { INote } from '@core/interfaces/i-note';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-note-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './note-card.component.html',
  styleUrl: './note-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteCardComponent {
  public data = input.required<INote>();
}

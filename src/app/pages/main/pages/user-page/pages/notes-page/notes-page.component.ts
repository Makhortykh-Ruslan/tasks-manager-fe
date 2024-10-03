import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-notes-page',
  standalone: true,
  imports: [],
  templateUrl: './notes-page.component.html',
  styleUrl: './notes-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesPageComponent {

}

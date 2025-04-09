import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reminders-page',
  imports: [],
  templateUrl: './reminders-page.component.html',
  styleUrl: './reminders-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemindersPageComponent {}

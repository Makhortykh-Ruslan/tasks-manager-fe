import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reminders-page',
  templateUrl: './reminders-page.component.html',
  styleUrl: './reminders-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RemindersPageComponent {}

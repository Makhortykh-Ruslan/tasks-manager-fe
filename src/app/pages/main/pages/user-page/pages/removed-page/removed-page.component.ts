import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-removed-page',
  templateUrl: './removed-page.component.html',
  styleUrl: './removed-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class RemovedPageComponent {}

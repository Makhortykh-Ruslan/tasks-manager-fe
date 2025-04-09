import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-removed-page',
  imports: [],
  templateUrl: './removed-page.component.html',
  styleUrl: './removed-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemovedPageComponent {}

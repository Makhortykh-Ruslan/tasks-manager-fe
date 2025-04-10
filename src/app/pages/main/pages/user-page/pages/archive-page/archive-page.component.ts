import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-archive-page',
  templateUrl: './archive-page.component.html',
  styleUrl: './archive-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ArchivePageComponent {}

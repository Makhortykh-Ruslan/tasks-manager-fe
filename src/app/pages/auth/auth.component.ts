import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class AuthComponent {}

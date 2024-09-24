import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { completeIconSet } from '@icons/tm-icons';
import { TmIconsService } from '@icons/tm-icons.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private epIconsService: TmIconsService) {
    epIconsService.registerIcons(completeIconSet);
  }
}

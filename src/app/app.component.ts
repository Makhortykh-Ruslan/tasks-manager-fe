import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { completeIconSet } from '../tm-icons/tm-icons';
import { TmIconsService } from '../tm-icons/tm-icons.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent {
  constructor(private epIconsService: TmIconsService) {
    epIconsService.registerIcons(completeIconSet);
  }
}

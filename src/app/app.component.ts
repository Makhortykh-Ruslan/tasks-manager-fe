import {
  ChangeDetectionStrategy,
  Component,
  inject,
  WritableSignal,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { completeIconSet } from '@icons/tm-icons';
import { TmIconsService } from '@icons/tm-icons.service';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { MainLoaderService } from '@core/services';

@Component({
  selector: 'app-root',
  template: `
    @if (loaderSignal()) {
      <app-loader [isOverlay]="true"></app-loader>
    }
    <router-outlet></router-outlet>
  `,
  imports: [RouterOutlet, LoaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public loaderSignal: WritableSignal<boolean> =
    inject(MainLoaderService).getLoaderState();

  private epIconsService = inject(TmIconsService);

  constructor() {
    this.epIconsService.registerIcons(completeIconSet);
  }
}

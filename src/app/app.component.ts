import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { completeIconSet } from '@icons/tm-icons';
import { TmIconsService } from '@icons/tm-icons.service';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { MainLoaderService } from '@core/services';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <app-loader
      *ngIf="loader$ | async"
      [isOverlay]="true"
    ></app-loader>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [RouterOutlet, LoaderComponent, AsyncPipe, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public loader$ = this.mainLoaderService.getLoaderState();
  constructor(
    private epIconsService: TmIconsService,
    private mainLoaderService: MainLoaderService,
  ) {
    epIconsService.registerIcons(completeIconSet);
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { sideBarItems } from './constants/side-bar-config';
import { Store } from '@ngxs/store';
import { UserState } from '@core/store/user-store/user.state';
import { ISideBarItem } from './interfaces/i-side-bar-item';
import { TmIconModule } from '@icons/tm-icon.module';
import { LogoComponent } from '@core/components/logo/logo.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavBarPipe } from '@core/pipes';
import { TMRoles } from '@core/enums/roles';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [
    TmIconModule,
    LogoComponent,
    RouterLink,
    RouterLinkActive,
    NavBarPipe,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBarComponent implements OnInit {
  public sideBarItemsState = signal<ISideBarItem[]>([]);

  private store = inject(Store);

  public currentRole!: TMRoles;

  public ngOnInit(): void {
    this.initData();
  }

  private initData(): void {
    this.currentRole = this.store.selectSnapshot(UserState.currentUser).role;

    this.sideBarItemsState.set(
      sideBarItems.get(
        this.store.selectSnapshot(UserState.currentUser).role,
      ) as ISideBarItem[],
    );
  }
}

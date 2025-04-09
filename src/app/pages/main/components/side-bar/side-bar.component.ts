import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  signal,
} from '@angular/core';
import { sideBarItems } from './constants/side-bar-config';
import { Store } from '@ngxs/store';
import { UserState } from '@core/store/user-store/user.state';
import { ISideBarItem } from './interfaces/i-side-bar-item';
import { TmIconModule } from '@icons/tm-icon.module';
import { LogoComponent } from '@core/components/logo/logo.component';
import {
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { NavBarPipe } from '@core/pipes';
import { TMRoles } from '@core/enums/roles';
import { AvatarComponent } from '@core/components/avatar/avatar.component';
import { NgClass, NgIf } from '@angular/common';
import { IUser } from '@core/interfaces/i-user';
import { UserSpace } from '@core/store/user-store/user.actions';
import { appRoutes } from '@core/constants';
import { HamburgerComponent } from '@core/components/hamburger/hamburger.component';

@Component({
  selector: 'app-side-bar',
  imports: [
    TmIconModule,
    LogoComponent,
    RouterLink,
    RouterLinkActive,
    NavBarPipe,
    AvatarComponent,
    NgClass,
    NgIf,
    HamburgerComponent,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SideBarComponent implements OnInit {
  public currentUser: Signal<IUser> = this.store.selectSignal(
    UserState.currentUser,
  );
  public sideBarItemsState = signal<ISideBarItem[]>([]);
  public isShowBarMobile = signal<boolean>(false);

  public currentRole!: TMRoles;

  constructor(
    private store: Store,
    private router: Router,
  ) {}

  public ngOnInit(): void {
    this.initData();
  }

  public handleOpenBarMobile(event: boolean): void {
    this.isShowBarMobile.set(event);
  }

  public closeBarMobile(): void {
    this.isShowBarMobile.set(false);
  }

  public handleLogout(): void {
    this.store.dispatch(new UserSpace.ResetCurrentUser());
    this.router.navigate([appRoutes.auth.routerPath]);
  }

  private initData(): void {
    this.currentRole = this.store.selectSnapshot(
      UserState.currentUser,
    ).role;

    this.sideBarItemsState.set(
      sideBarItems.get(
        this.store.selectSnapshot(UserState.currentUser).role,
      ) as ISideBarItem[],
    );
  }
}

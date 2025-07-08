import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { AbstractErrorMessages } from '@core/abstract/abstract-error-messages';
import { controlNames } from '@core/enums';
import { labels } from '@core/enums/labels';
import { placeholders } from '@core/enums/placeholder';
import { AuthService } from '@core/services/auth.service';
import { finalize, take, tap } from 'rxjs';

import { AuthFormGroupService } from '../../services/auth-form-group.service';
import { ActivatedRoute, Router } from '@angular/router';
import { appRoutes } from '@core/constants/routes';
import { AuthSpace } from '@core/store/auth-store/auth.actions';
import { Store } from '@ngxs/store';
import { LogoComponent } from '@core/components/logo/logo.component';
import { InputComponent } from '@core/components/input/input.component';
import { ControlConverterPipe } from '@core/pipes';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { ButtonDirective } from '@core/directives/button.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    LogoComponent,
    InputComponent,
    ControlConverterPipe,
    LoaderComponent,
    ButtonDirective,
  ],
  providers: [AuthFormGroupService, AuthService],
  standalone: true,
})
export class LoginComponent
  extends AbstractErrorMessages
  implements OnInit
{
  public isShowLoading = signal<boolean>(false);

  public controlNames = controlNames;
  public placeholders = placeholders;
  public labels = labels;

  private authFormGroupService = inject(AuthFormGroupService, {
    self: true,
  });
  private authService = inject(AuthService, { self: true });
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private store = inject(Store);

  public ngOnInit(): void {
    this.initData();
  }

  public handleSubmit(): void {
    this.isShowLoading.set(true);

    this.authService
      .login(this.formGroup.getRawValue())
      .pipe(
        take(1),
        tap((response) => {
          this.store.dispatch(
            new AuthSpace.SetAccessToken(response.model),
          );
          this.router.navigate(['/']);
        }),
        finalize(() => this.isShowLoading.set(false)),
      )
      .subscribe();
  }

  public handleRedirectToSingUp(): void {
    this.router.navigate([appRoutes.registration.routerPath], {
      relativeTo: this.activatedRoute.parent,
    });
  }

  private initData(): void {
    this.authFormGroupService.initLoginFormGroup();
    this.formGroup = this.authFormGroupService.getLoginFormGroup();
  }
}

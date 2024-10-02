import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { AbstractErrorMessages } from '@core/abstract/abstract-error-messages';
import { CheckboxComponent } from '@core/components/checkbox/checkbox.component';
import { InputComponent } from '@core/components/input/input.component';
import { LogoComponent } from '@core/components/logo/logo.component';
import { ButtonDirective } from '@core/directives/button.directive';
import { controlNames } from '@core/enums';
import { labels } from '@core/enums/labels';
import { placeholders } from '@core/enums/placeholder';
import { ControlConverterPipe } from '@core/pipes/control-converter.pipe';
import { AuthService } from '@core/services/auth.service';
import { NgOnDestroy } from '@core/services/ng-on-destroy.service';
import { finalize, take, takeUntil } from 'rxjs';

import { LoginFormGroupService } from '../../services/login-form-group.service';
import { LoaderComponent } from '@core/components/loader/loader.component';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { appRoutes } from '@core/constants/routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  providers: [LoginFormGroupService, NgOnDestroy, AuthService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InputComponent,
    LogoComponent,
    ButtonDirective,
    CheckboxComponent,
    ControlConverterPipe,
    LoaderComponent,
    NgIf,
  ],
})
export class LoginComponent extends AbstractErrorMessages implements OnInit {
  public isShowLoading = signal<boolean>(false);

  public controlNames = controlNames;
  public placeholders = placeholders;
  public labels = labels;

  private loginService = inject(LoginFormGroupService, { self: true });
  private authService = inject(AuthService, { self: true });
  private ngOnDestroy$ = inject(NgOnDestroy, { self: true });
  private router = inject(Router);

  public ngOnInit(): void {
    this.initData();
  }

  public handleSubmit(): void {
    this.isShowLoading.set(true);

    this.authService
      .login(this.formGroup.getRawValue())
      .pipe(
        take(1),
        finalize(() => this.isShowLoading.set(false)),
        takeUntil(this.ngOnDestroy$),
      )
      .subscribe();
  }

  public handleRedirectToSingUp(): void {
    this.router.navigate([appRoutes.registration.routerPath]);
  }

  private initData(): void {
    this.loginService.initLoginFormGroup();
    this.formGroup = this.loginService.getLoginFormGroup();
  }
}

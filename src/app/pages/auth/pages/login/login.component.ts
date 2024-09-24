import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
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
import { take, takeUntil } from 'rxjs';

import { LoginFormGroupService } from '../../services/login-form-group.service';

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
  ],
})
export class LoginComponent extends AbstractErrorMessages implements OnInit {
  public controlNames = controlNames;
  public placeholders = placeholders;
  public labels = labels;

  private loginService = inject(LoginFormGroupService);
  private authService = inject(AuthService);
  private ngOnDestroy$ = inject(NgOnDestroy);

  public ngOnInit(): void {
    this.initData();
  }

  public handleSubmit(): void {
    this.authService
      .login(this.formGroup.getRawValue())
      .pipe(take(1), takeUntil(this.ngOnDestroy$))
      .subscribe();
  }

  private initData(): void {
    this.loginService.initLoginFormGroup();
    this.formGroup = this.loginService.getLoginFormGroup();
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { AbstractForm } from '@core/abstract/abstract-form';
import { CheckboxComponent } from '@core/components/checkbox/checkbox.component';
import { InputComponent } from '@core/components/input/input.component';
import { LogoComponent } from '@core/components/logo/logo.component';
import { ButtonDirective } from '@core/directives/button.directive';
import { controlNames } from '@core/enums';
import { labels } from '@core/enums/labels';
import { placeholders } from '@core/enums/placeholder';
import { ControlConverterPipe } from '@core/pipes/control-converter.pipe';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  styleUrls: ['./login.component.scss'],
  providers: [LoginService],
  imports: [
    InputComponent,
    LogoComponent,
    ButtonDirective,
    CheckboxComponent,
    ControlConverterPipe,
  ],
})
export class LoginComponent extends AbstractForm implements OnInit {
  public controlNames = controlNames;
  public placeholders = placeholders;
  public labels = labels;

  private loginService = inject(LoginService);

  public ngOnInit(): void {
    this.initData();
  }

  public handleSubmit(): void {
    console.log('hello', this.formGroup.getRawValue());
  }

  private initData(): void {
    this.loginService.initLoginFormGroup();
    this.formGroup = this.loginService.getLoginFormGroup();

    console.log('hello', this.formGroup.get(controlNames.PASSWORD)?.errors);
  }
}

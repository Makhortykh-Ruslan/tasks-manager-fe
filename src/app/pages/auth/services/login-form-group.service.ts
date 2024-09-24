import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@core/constants/reg-exp';
import { controlNames } from '@core/enums';

@Injectable()
export class LoginFormGroupService {
  private loginFormGroup!: FormGroup;

  private fb = inject(FormBuilder);

  public initLoginFormGroup(): void {
    this.loginFormGroup = this.fb.group({
      [controlNames.EMAIL]: [
        null,
        [Validators.required, Validators.pattern(EMAIL_REGEXP)],
      ],
      [controlNames.PASSWORD]: [
        null,
        [Validators.required, Validators.pattern(PASSWORD_REGEXP)],
      ],
    });
  }

  public getLoginFormGroup(): FormGroup {
    return this.loginFormGroup;
  }
}

import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@core/constants/reg-exp';
import { controlNames } from '@core/enums';

@Injectable()
export class AuthFormGroupService {
  private loginFormGroup!: FormGroup;
  private registrationFormGroup!: FormGroup;

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

  public initRegistrationFormGroup(): void {
    this.registrationFormGroup = this.fb.group({
      [controlNames.USER_NAME]: [null, [Validators.required]],
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

  public getRegistrationFormGroup(): FormGroup {
    return this.registrationFormGroup;
  }
}

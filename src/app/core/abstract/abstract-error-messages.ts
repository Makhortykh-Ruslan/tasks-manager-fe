import { FormGroup } from '@angular/forms';
import { controlNames } from '@core/enums';

export class AbstractErrorMessages {
  protected formGroup!: FormGroup;
  protected copyFormGroup!: FormGroup;

  protected readonly defaultRequiredMessage =
    'This field is required.';
  protected readonly customPhoneMask = '9{14}';
  protected readonly customZipCodeMask = '9{7}';

  public get emailErrorMessage(): string {
    const controlErrors = this.formGroup.get(
      controlNames.EMAIL,
    )?.errors;

    return controlErrors?.['required']
      ? this.defaultRequiredMessage
      : controlErrors?.['pattern']
        ? 'Incorrect email format, please try again.'
        : controlErrors?.[controlNames.EMAIL];
  }

  public get passwordErrorMessage(): string {
    const controlErrors = this.formGroup.get(
      controlNames.PASSWORD,
    )?.errors;

    return controlErrors?.['required']
      ? this.defaultRequiredMessage
      : controlErrors?.['passwordNotSame']
        ? ''
        : controlErrors?.['pattern']
          ? 'Password must contain at least 8 characters, 1 capital letter, 1 small letter and at least 1 number and special symbol.'
          : controlErrors?.[controlNames.PASSWORD];
  }

  public get userNameErrorMessage(): string {
    const controlErrors = this.formGroup.get(
      controlNames.USER_NAME,
    )?.errors;

    return controlErrors?.['required']
      ? this.defaultRequiredMessage
      : controlErrors?.[controlNames.USER_NAME];
  }
}

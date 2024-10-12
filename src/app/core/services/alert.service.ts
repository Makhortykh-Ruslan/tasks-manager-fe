import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { AlertComponent } from '@core/components/alert/alert.component';
import { AlertModel } from '@core/models/alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  private _snackBar = inject(MatSnackBar);

  public throwSuccess(message: string): void {
    this._snackBar.openFromComponent(AlertComponent, {
      ...this.alertConfig({
        title: 'Success',
        type: 'success',
        message,
      }),
    });
  }

  public throwError(message = 'Error'): void {
    this._snackBar.openFromComponent(AlertComponent, {
      ...this.alertConfig({
        title: 'Error',
        type: 'error',
        message,
      }),
    });
  }

  public throwWarm(message = 'Warm'): void {
    this._snackBar.openFromComponent(AlertComponent, {
      ...this.alertConfig({
        title: 'Warm',
        type: 'warm',
        message,
      }),
    });
  }

  private alertConfig(data: AlertModel): MatSnackBarConfig {
    return {
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      data,
      duration: 5000,
    };
  }
}

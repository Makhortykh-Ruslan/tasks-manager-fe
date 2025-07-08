import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AlertModel } from '@core/models/alert.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgClass],
})
export class AlertComponent {
  public data: AlertModel = inject(MAT_SNACK_BAR_DATA);
}

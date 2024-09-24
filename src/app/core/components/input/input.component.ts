import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TLabels } from '@core/enums/labels';
import { TPlaceholder } from '@core/enums/placeholder';
import { TmIconModule } from '@icons/tm-icon.module';
import { tmIcon } from '@icons/tm-icons';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, TmIconModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() type = 'text';
  @Input() error = '';
  @Input() isRequired = '';
  @Input() rightIcon: tmIcon | null = null;
  @Input() label!: TLabels;
  @Input() placeholder!: TPlaceholder;
  @Input() formControl: FormControl = new FormControl(null);
}

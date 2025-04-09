import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TLabels } from '@core/enums/labels';
import { TPlaceholder } from '@core/enums/placeholder';
import { TmIconModule } from '@icons/tm-icon.module';
import { tmIcon } from '@icons/tm-icons';

@Component({
  selector: 'app-input',
  imports: [CommonModule, TmIconModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InputComponent {
  public leftIconName = input<tmIcon | null>(null);
  public rightIconName = input<tmIcon | null>(null);
  @Input() type = 'text';
  @Input() error = '';
  @Input() isRequired = false;
  @Input() label!: TLabels;
  @Input() placeholder!: TPlaceholder;
  @Input() formControl: FormControl = new FormControl(null);
}

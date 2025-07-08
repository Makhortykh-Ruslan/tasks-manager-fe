import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TLabels } from '@core/enums/labels';
import { TPlaceholder } from '@core/enums/placeholder';
import { TmIconModule } from '@icons/tm-icon.module';
import { tmIcon } from '@icons/tm-icons';

@Component({
  selector: 'app-input',
  imports: [TmIconModule, ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class InputComponent {
  public leftIconName = input<tmIcon | null>(null);
  public rightIconName = input<tmIcon | null>(null);

  public type = input<string>('text');
  public error = input<string>('');
  public isRequired = input<boolean>(false);

  public label = input<TLabels>();
  public placeholder = input<TPlaceholder>();
  public formControl = input<FormControl>();
}

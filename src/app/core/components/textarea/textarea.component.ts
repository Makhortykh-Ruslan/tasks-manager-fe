import {
  ChangeDetectionStrategy,
  Component,
  input,
} from '@angular/core';
import { TLabels, TPlaceholder } from '@core/enums';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class TextareaComponent {
  public label = input<TLabels>();
  public placeholder = input<TPlaceholder>();
  public height = input<number>();
  public isRequired = input<boolean>();
  public formControl = input<FormControl>(new FormControl(null));

  public get name(): string {
    return this.label() as string;
  }

  public get heightValue(): string {
    return this.height() + 'px';
  }
}

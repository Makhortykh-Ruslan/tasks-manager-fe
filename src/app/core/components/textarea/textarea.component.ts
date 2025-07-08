import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TLabels, TPlaceholder } from '@core/enums';
import { NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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

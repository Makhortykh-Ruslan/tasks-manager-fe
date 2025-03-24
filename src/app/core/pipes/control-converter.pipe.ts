import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'controlConverter',
  standalone: true,
})
export class ControlConverterPipe implements PipeTransform {
  public transform(control: unknown): FormControl {
    return control as FormControl;
  }
}

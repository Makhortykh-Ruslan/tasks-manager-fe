import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlNames } from '@core/enums';

@Injectable()
export class NoteFormGroupService {
  private noteFormGroup!: FormGroup;

  private fb = inject(FormBuilder);

  public initNoteFormGroup(): void {
    this.noteFormGroup = this.fb.group({
      [controlNames.TITLE]: [null, Validators.required],
      [controlNames.DESCRIPTION]: [null, Validators.required],
    });
  }

  public getNoteFormGroup(): FormGroup {
    return this.noteFormGroup;
  }
}

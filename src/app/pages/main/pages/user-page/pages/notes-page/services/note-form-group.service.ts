import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlNames } from '@core/enums';
import { INote } from '@core/interfaces';

@Injectable()
export class NoteFormGroupService {
  private noteFormGroup!: FormGroup;

  private fb = inject(FormBuilder);

  public initNoteFormGroup(data?: INote): void {
    this.noteFormGroup = this.fb.group({
      [controlNames.TITLE]: [data ? data.title : null, Validators.required],
      [controlNames.DESCRIPTION]: [data ? data.description : null, Validators.required],
      [controlNames.DRAG_POSITION]: [data ? data.dragPosition : { x: 0, y: 0 }],
    });
  }

  public getNoteFormGroup(): FormGroup {
    return this.noteFormGroup;
  }
}

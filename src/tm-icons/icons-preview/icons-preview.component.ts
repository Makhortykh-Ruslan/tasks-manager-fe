import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, Subscription } from 'rxjs';

import { TmIconModule } from '../tm-icon.module';
import { completeIconSet, TmIcon } from '../tm-icons';

@Component({
  selector: 'app-icons-preview',
  templateUrl: './icons-preview.component.html',
  styleUrls: ['./icons-preview.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ReactiveFormsModule, TmIconModule, NgForOf],
})
export class IconsPreviewComponent implements OnInit {
  public icons = completeIconSet;
  public searchControl: FormControl = new FormControl('');
  public subscription!: Subscription;
  constructor() {}

  public ngOnInit(): void {
    this.subscription = this.searchControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((val: string) => {
        this.icons = completeIconSet.filter((el: TmIcon) => el.name.includes(val));
      });
  }
}

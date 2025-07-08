import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { distinctUntilChanged, Subscription } from 'rxjs';

import { completeIconSet, TmIcon } from '../tm-icons';
import { TmIconModule } from '@icons/tm-icon.module';

@Component({
  selector: 'app-icons-preview',
  templateUrl: './icons-preview.component.html',
  styleUrls: ['./icons-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ReactiveFormsModule, TmIconModule],
})
export class IconsPreviewComponent implements OnInit {
  public icons = completeIconSet;
  public searchControl: FormControl = new FormControl('');
  public subscription!: Subscription;

  public ngOnInit(): void {
    this.subscription = this.searchControl.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((val: string) => {
        this.icons = completeIconSet.filter((el: TmIcon) =>
          el.name.includes(val),
        );
      });
  }
}

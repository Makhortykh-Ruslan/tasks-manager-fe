import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgIf],
})
export class AvatarComponent {
  public isShowDelete = input<boolean>(false);
}

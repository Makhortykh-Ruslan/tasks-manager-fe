import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class NgOnDestroy extends Subject<null> implements OnDestroy {
  public ngOnDestroy(): void {
    this.next(null);
    this.complete();
  }
}

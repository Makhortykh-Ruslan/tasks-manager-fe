import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainLoaderService {
  private loaderState = new BehaviorSubject<boolean>(false);

  public getLoaderState(): Observable<Boolean> {
    return this.loaderState.asObservable();
  }

  public setLoaderState(data: boolean): void {
    this.loaderState.next(data);
  }
}

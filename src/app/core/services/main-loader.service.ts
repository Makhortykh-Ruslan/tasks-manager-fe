import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainLoaderService {
  private loaderState: WritableSignal<boolean> = signal<boolean>(false);

  public getLoaderState(): WritableSignal<boolean> {
    return this.loaderState;
  }

  public setLoaderState(data: boolean): void {
    this.loaderState.set(data);
  }
}

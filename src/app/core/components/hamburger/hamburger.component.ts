import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-hamburger',
  standalone: true,
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HamburgerComponent {
  public value = signal<boolean>(false);
  public change = output<boolean>();

  private elementRef = inject(ElementRef);

  @HostListener('click')
  public handleClick(): void {
    this.value.update((val) => !val);
    this.change.emit(this.value());
  }

  @HostListener('document:mousedown', ['$event'])
  public onClick(event: MouseEvent): void {
    const isContains = !!this.elementRef.nativeElement.contains(
      event.target,
    );

    if (!isContains) {
      this.value.set(false);
      this.change.emit(false);
    }
  }
}

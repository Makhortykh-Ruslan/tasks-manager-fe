import { Directive, ElementRef, inject, Input, OnInit, Renderer2 } from '@angular/core';
import { TButtonColor } from '@core/types/t-button';

@Directive({
  selector: '[appButton]',
  standalone: true,
})
export class ButtonDirective implements OnInit {
  @Input()
  color: TButtonColor = 'blue';

  private renderer2 = inject(Renderer2);
  private elementRef = inject(ElementRef);

  public ngOnInit(): void {
    this.renderer2.addClass(this.elementRef.nativeElement, 'tm-button');
    this.renderer2.addClass(this.elementRef.nativeElement, this.color);
  }
}

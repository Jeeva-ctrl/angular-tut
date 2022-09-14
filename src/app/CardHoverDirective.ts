import {
  HostListener,
  ElementRef,
  Renderer2,
  Directive,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[ccCardHover]',
})
export class CardHoverDirective {
  public creature = 'Dolphin';
  constructor(private el: ElementRef, private renderer: Renderer2) {
    let shark = renderer.createText(this.creature);
    renderer.appendChild(el.nativeElement, shark);
  }
  @HostBinding('class.card-outline-primary') private ishovering: boolean;
  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setAttribute(part, 'style', 'display:block');
    this.renderer.setAttribute(part, 'style', 'border:1px solid red');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    let part = this.el.nativeElement.querySelector('.card-text');
    this.renderer.setAttribute(part, 'style', 'display:none');
    this.ishovering = false;
  }
}

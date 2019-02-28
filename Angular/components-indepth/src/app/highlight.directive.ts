import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('backcolor') color;
@Input() textcolor;
  constructor(private element:ElementRef) { 
  }
  @HostListener('mouseenter') addHighlight(){
    this.element.nativeElement.style.backgroundColor = this.color;
    this.element.nativeElement.style.color = this.textcolor;
  }
  @HostListener('mouseleave') removehighlight(){
    this.element.nativeElement.style.backgroundColor = null;
    this.element.nativeElement.style.color = null;
  }

}

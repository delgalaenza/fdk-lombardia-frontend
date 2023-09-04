import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appResizeListener]'
})
export class ResizeListenerDirective {

  constructor() { }

  @Output() resized:EventEmitter<boolean> = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth>570) {
      this.resized.next(true);
    }
  }

}

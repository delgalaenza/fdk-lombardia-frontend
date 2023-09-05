import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appResizeListener]'
})
export class ResizeListenerDirective {

  constructor() { }

  @Input() navbarOpen: boolean = false;
  @Output() resized:EventEmitter<boolean> = new EventEmitter();

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    if(window.innerWidth>570 && this.navbarOpen) {
      this.resized.next(true);
    }
  }

}

import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appScrollListener]'
})
export class ScrollListenerDirective {

  constructor() { }

  @Output() scrolled:EventEmitter<boolean> = new EventEmitter();

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if(window.scrollY > 50){
      this.scrolled.next(true);
    }
    else {
      this.scrolled.next(false);
    }
  }

}

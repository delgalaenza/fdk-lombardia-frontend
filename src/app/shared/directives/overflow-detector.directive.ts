import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appOverflowDetector]'
})
export class OverflowDetectorDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkOverflow();
  }

  ngAfterViewInit() {
    this.checkOverflow();
  }

  private checkOverflow() {
    debugger;
    const element = this.el.nativeElement;
    const parent = element.parentElement;

    if (element.scrollWidth > parent.clientWidth) {
      this.renderer.addClass(element, 'overflowed-nav');
    } else {
      this.renderer.removeClass(element, 'overflowed-nav');
    }
  }
}

import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPostStyle]'
})
export class PostStyleDirective {

  constructor(
    public elementRef: ElementRef
  ) {
    this
      .elementRef
      .nativeElement
      .style.border = '5px solid red';
  }

  ngOnChanges(): void {
    this
      .elementRef
      .nativeElement
      .style = 'border-radius: 10px; box-shadow: 8px 8px 12px pink, -3px -3px 7px pink;';

  }

  @HostListener('mouseover') mouseOver() {
    this
      .elementRef
      .nativeElement
      .style = 'border-radius: 10px; box-shadow: 8px 8px 12px pink, -3px -3px 7px pink;';
  }
  @HostListener('mouseout') mouseOut() {
    this
      .elementRef
      .nativeElement
      .style = 'border-radius: 10px; box-shadow: 5px 5px 10px cyan, -5px -5px 10px teal;';
  }
}

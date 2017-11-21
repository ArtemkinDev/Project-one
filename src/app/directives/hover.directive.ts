import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {
  @Input('appHover') hoverColor: string = 'green';
  @Input() defaultColor: string = 'black';
  @HostBinding('style.color') color:string;
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.color = this.hoverColor;
  };

  @HostListener('mouseleave')
  mouseLeave() {
    this.color = this.defaultColor;
  };
}

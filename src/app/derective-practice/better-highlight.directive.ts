import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlighColor: string = 'purple';
  @HostBinding('style.backgroundColor') backgroundColor: string;


  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {  }

  // static directive
  ngOnInit(){
    this.backgroundColor = 'yellow';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'purple');
  }

  // dynamic directive
  @HostListener('mouseenter') mouseover(eventData: Event){
    // using renderer
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'purple');

    // using hostbinding
    // this.backgroundColor = 'purple';


    this.backgroundColor = this.highlighColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', 'transparent');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }
}

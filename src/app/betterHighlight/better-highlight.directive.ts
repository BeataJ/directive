import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  Input, 
  OnInit, 
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'trasparent';
  @Input() highlightColor: string = 'blue';
  @Input() colorD: string = 'white';
  @Input() colorH: string = 'coral';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string 

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    this.color = this.colorH;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'),
    //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
    this.backgroundColor = this.highlightColor;
    this.color = this.colorD;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'coral')
    this.backgroundColor = this.defaultColor;
    this.color = this.colorH;
  }

}

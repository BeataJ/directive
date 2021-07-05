import { 
  Directive, 
  ElementRef, 
  HostBinding, 
  HostListener, 
  OnInit, 
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'),
    //   this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseenter') mouseover() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue'); 
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')
  }

  @HostListener('mouseleave') mouseLeave() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'coral')
  }

}

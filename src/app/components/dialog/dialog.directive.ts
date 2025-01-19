import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brDialog]',
})
export class DialogDirective implements OnInit{

  constructor(
    private renderer:Renderer2,
    private element:ElementRef
  ){}

  ngOnInit(): void {
    this.defaultDialogStyle();
  }
  addBackdrop() {
    const backdrop = this.renderer.createElement('div');
    this.renderer.addClass(backdrop, 'backdrop');
    this.renderer.appendChild(this.element.nativeElement.parentNode, backdrop);

    // Estilo en caso de no usar CSS global
    this.renderer.setStyle(backdrop, 'position', 'fixed');
    this.renderer.setStyle(backdrop, 'top', '0');
    this.renderer.setStyle(backdrop, 'left', '0');
    this.renderer.setStyle(backdrop, 'width', '100%');
    this.renderer.setStyle(backdrop, 'height', '100%');
    this.renderer.setStyle(backdrop, 'background-color', 'black');
    this.renderer.setStyle(backdrop, 'z-index', '9998');
  }

  defaultDialogStyle(){
    this.renderer.setStyle(this.element.nativeElement,'position','fixed');
    this.renderer.setStyle(this.element.nativeElement,'max-width','700px');
    this.renderer.setStyle(this.element.nativeElement,'max-height','500px');
    this.renderer.setStyle(this.element.nativeElement,'z-index','9999');
    this.renderer.setStyle(this.element.nativeElement,'top','50%');
    this.renderer.setStyle(this.element.nativeElement,'padding','20px');
    this.renderer.setStyle(this.element.nativeElement,'border-radius','20px');
    this.renderer.setStyle(this.element.nativeElement,'box-shadow','--card-bg-color 3px 3px 10px');
    this.renderer.setStyle(this.element.nativeElement,'transform','translate(-50%, -50%)');
    this.renderer.setStyle(this.element.nativeElement,'left','50%');
    this.renderer.setStyle(this.element.nativeElement,'background-color','var(--main-bg-color)');


  }

}

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brButtonSearchBar]'
})
export class ButtonSearchBarDirective {

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) { }

  ngOnInit(): void {
    this.defaultButtonStyle();
    this.setStyles();
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setStylesHover(); // Cambia el color de fondo a amarillo
  }

  // Detecta cuando el mouse sale del elemento
  @HostListener('mouseleave') onMouseLeave() {
    this.setStyles(); // Restaura el color original
  }

  setStyles() {
    this.primaryColor();
  }
  setStylesHover() {
    this.primaryColorHover();
  }

  private defaultButtonStyle() {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'gap', '5px');
    this.renderer.setStyle(this.element.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '0px 20px 20px 0px');
    this.renderer.setStyle(this.element.nativeElement, 'min-height', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 15px');
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', '500');
    this.renderer.setStyle(this.element.nativeElement, 'font-family', 'serif');
    this.renderer.setAttribute(this.element.nativeElement,'class', 'br-button-icon');
  }

  private primaryColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'var(--main-bg-txt-color)');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-bg-color)');
    this.renderer.setStyle(this.element.nativeElement, 'border', 'var(--main-bg-color)');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow',' 3px 3px 10px  var(--main-bg-color)')
  }private primaryColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-bg-color-hover)');
  }


}

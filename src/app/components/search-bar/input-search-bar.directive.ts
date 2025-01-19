import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brInputSearchBar]'
})
export class InputSearchBarDirective {

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) { }

  ngOnInit(): void {
    this.defaultInputSearchStyle();
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

  private defaultInputSearchStyle() {
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '20px 0px 0px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'width', '100%');
    this.renderer.setStyle(this.element.nativeElement, 'min-height', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '15px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'outline', 'none');
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', '500');
    this.renderer.setStyle(this.element.nativeElement, 'font-family', 'serif');
  }

  private primaryColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'var(--main-txt-color)');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-color)');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow',' 3px 3px 10px  var(--main-bg-color)')
    this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
  }private primaryColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', '3px 3px 10px  var(--main-bg-color-hover)');
  }



}

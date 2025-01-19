import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brInput]'
})
export class InputDirective {

  @Input() disabled:boolean=false;

  constructor(
    private element:ElementRef,
    private renderer:Renderer2
  ) { }

  ngOnInit(): void {
    this.defaultInputStyle();
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
      if (this.disabled) {
        this.disabledInput();
      } else {
        this.primaryColor();
      }
      
    }
    setStylesHover() {
      if (this.disabled) {
        this.disabledInput();
      } else {
            this.primaryColorHover();
      }
    }

  private defaultInputStyle() {
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.element.nativeElement, 'min-width', '300px');
    this.renderer.setStyle(this.element.nativeElement, 'height', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'font-size', '15px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '0px 20px');
    this.renderer.setStyle(this.element.nativeElement, 'outline', 'none');
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', '500');
    this.renderer.setStyle(this.element.nativeElement, 'font-family', 'serif');
  }

  private disabledInput() {
    this.renderer.setProperty(this.element.nativeElement,'disabled', 'isDisabled');
    this.renderer.setStyle(this.element.nativeElement, 'color', 'var(--main-txt-color)');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-color-disabled)');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow',' 3px 3px 10px  var(--main-bg-color)')
    this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
  }

  private primaryColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'var(--main-txt-color)');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--card-bg-color)');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow',' 3px 3px 10px  var(--main-bg-color)')
    this.renderer.setStyle(this.element.nativeElement, 'border', 'none');
  }private primaryColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', '3px 3px 10px  var(--main-bg-color-hover)');
  }

}

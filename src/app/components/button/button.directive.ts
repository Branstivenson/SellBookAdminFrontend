import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brButton]'
})
export class ButtonDirective implements OnInit {

  @Input() severity: string = 'primary';

  constructor(
    private element: ElementRef, private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.defaultButtonStyle();
    this.observeChanges();
  }

  @HostListener('mouseenter') onMouseEnter() {
    if(!this.element.nativeElement.disabled){
      this.setStylesHover(); // Cambia el color de fondo a amarillo
    }
  }

  // Detecta cuando el mouse sale del elemento
  @HostListener('mouseleave') onMouseLeave() {
    if(!this.element.nativeElement.disabled){
      this.setStyles(); // Restaura el color original
    }
  }

  setStyles() {
      switch(this.severity){
        case 'secondary':
          this.secondaryColor();
          break;
        case 'danger':
          this.dangerColor();
          break;
        case 'success':
          this.successColor();
          break;
        default:
          this.primaryColor();
    }
  }
  setStylesHover() {
      switch(this.severity){
        case 'secondary':
          this.secondaryColorHover();
          break;
        case 'danger':
          this.dangerColorHover();
          break;
        case 'success':
          this.successColorHover();
          break;
        default:
          this.primaryColorHover();
    }
  }

  private defaultButtonStyle() {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'gap', '5px');
    this.renderer.setStyle(this.element.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '10px');
    this.renderer.setStyle(this.element.nativeElement, 'min-width', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'min-height', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 15px');
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', '500');
    this.renderer.setStyle(this.element.nativeElement, 'font-family', 'serif');
    this.renderer.setAttribute(this.element.nativeElement,'class', 'br-button-icon');
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow',' 3px 3px 10px  var(--main-bg-color)')

  }

  private observeChanges(): void {
    const applyStyles = () => {
      const isDisabled = this.element.nativeElement.disabled;
      if (isDisabled) {
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.renderer.setStyle(this.element.nativeElement, 'background-color', '#5a5a5a');
        this.renderer.setStyle(this.element.nativeElement, 'border', '#5a5a5a');
      } else {
        this.setStyles(); // Aplica los estilos según la severidad
      }
    };
  
    // Aplica los estilos iniciales
    applyStyles();
  
    // Observa cambios en el atributo `disabled`
    const observer = new MutationObserver(applyStyles);
    observer.observe(this.element.nativeElement, {
      attributes: true, // Observa cambios en los atributos
      attributeFilter: ['disabled'], // Solo monitorea el atributo `disabled`
    });
  }
  


  private primaryColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'var(--main-bg-txt-color)');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-bg-color)');
    this.renderer.setStyle(this.element.nativeElement, 'border', 'var(--main-bg-color)');
  }private primaryColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-bg-color-hover');
  }

  private secondaryColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#dedad7');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#dedad7');
  }private secondaryColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#bebebe');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#dedad7');
  }

  private dangerColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'var(--main-error-bg-color)');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-error-color)');
    this.renderer.setStyle(this.element.nativeElement, 'border', 'var(--main-error-color)');
  }private dangerColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'var(--main-error-color-hover');
  }

  private successColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#67bd51');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#67bd51');
  }private successColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#559c44');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#67bd51');
  }


}

import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[brButton]'
})
export class ButtonDirective implements OnInit {

  @Input() severity: string = 'primary';
  @Input() disabled: boolean = false;


  constructor(
    private element: ElementRef, private renderer: Renderer2
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
    if (this.disabled) {
      this.disabledButton();
    } else {
      switch(this.severity){
        case 'secondary':
          this.secondaryColor();
          break;
        case 'danger':
          this.dangerColor();
          break;
        default:
          this.primaryColor();
      }
    }
  }
  setStylesHover() {
    if (this.disabled) {
      this.disabledButton();
    } else {
      switch(this.severity){
        case 'secondary':
          this.secondaryColorHover();
          break;
        case 'danger':
          this.dangerColorHover();
          break;
        default:
          this.primaryColorHover();
      }
    }
  }

  private defaultButtonStyle() {
    this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(this.element.nativeElement, 'gap', '5px');
    this.renderer.setStyle(this.element.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(this.element.nativeElement, 'min-width', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'min-height', '40px');
    this.renderer.setStyle(this.element.nativeElement, 'padding', '10px 15px');
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', '500');
    this.renderer.setStyle(this.element.nativeElement, 'font-family', 'serif');
    this.renderer.setAttribute(this.element.nativeElement,'class', 'br-button-icon');
  }

  private disabledButton() {
    this.renderer.setProperty(this.element.nativeElement,'disabled', 'isDisabled')
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#5a5a5a');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#5a5a5a');
  }

  private primaryColor() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#179D8D');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#179D8D');
  }private primaryColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#14887a');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#179D8D');
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
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#BD5153');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#BD5153');
  }private dangerColorHover() {
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement, 'background-color', '#9c4446');
    this.renderer.setStyle(this.element.nativeElement, 'border', '#BD5153');
  }


}

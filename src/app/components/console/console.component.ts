import { Component, Input } from '@angular/core';

@Component({
  selector: 'br-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent {

  @Input() severity:string='success'
  @Input() message:string='Works Fine'
  @Input() hidden:boolean=true;


  hideConsole(){
    this.hidden=true;
  }
}

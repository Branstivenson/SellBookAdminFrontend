import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'br-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  
  @Input() visible!:boolean;

  @Output() hide:EventEmitter<any>= new EventEmitter<any>();

  onhide(){
    this.visible=false;
    this.hide.emit();
  }
  
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'br-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  @Input() visible!:boolean;

  @Output() hide:EventEmitter<any>= new EventEmitter<any>();

  onhide(){
    this.visible=false;
    this.hide.emit();
  }
  

}

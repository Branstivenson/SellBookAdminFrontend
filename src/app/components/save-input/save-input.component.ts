import { Component } from '@angular/core';

@Component({
  selector: 'br-save-input',
  templateUrl: './save-input.component.html',
  styleUrls: ['./save-input.component.css']
})
export class SaveInputComponent {

  isEdit:boolean=false;

  edit(){
    this.isEdit=true;
  }
  cancel(){
    this.isEdit=false;
  }


}

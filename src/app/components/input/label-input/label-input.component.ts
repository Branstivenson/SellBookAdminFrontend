import { Component, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'br-label-input',
  templateUrl: './label-input.component.html',
  styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent {

  @Input() label:string='';
  @Input() noRequired:boolean=false;

  constructor(
    private fb:FormBuilder
  ){ }

}

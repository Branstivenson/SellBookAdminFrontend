import { Component, Input } from '@angular/core';

@Component({
  selector: 'br-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() severity:string='primary';
  @Input() label!:string;
  @Input() icon!:string;
  @Input() type:string='button';

}

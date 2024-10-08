import { Component, Input } from '@angular/core';
import { INavHeader } from './model/INavHeader';

@Component({
  selector: 'br-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() headers!:INavHeader[];
}

import { Component, Input } from '@angular/core';
import { INavHeader } from './model/INavHeader';
import { Router } from '@angular/router';

@Component({
  selector: 'br-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private router:Router
  ){}
  @Input() headers!:INavHeader[];

  goTo(url:string){
    this.router.navigate([url])
  }
}

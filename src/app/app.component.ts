import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { INavbarEntries } from './components/navbar/model/navbar-entries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SellBookAdminFrontend';

  constructor(){}

  navbarEntries:INavbarEntries[]=[
    {label:'Inventario', url:'/inventary'},
    {label:'Nuevo Libro', url:'/new-book'}
  ]
}

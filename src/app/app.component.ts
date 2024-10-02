import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { INavHeader } from './components/navbar/model/INavHeader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SellBookAdminFrontend';

  constructor(){}

  headers:INavHeader[]=[
    {name:'Inventario', url:'/inventary'},
    {name:'Nuevo Libro', url:'/new-book'}
  ]

}

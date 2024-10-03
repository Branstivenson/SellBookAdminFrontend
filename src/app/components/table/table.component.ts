import { Component, Input } from '@angular/core';
import { IAction } from './model/action';
import { Router } from '@angular/router';

@Component({
  selector: 'br-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() items!:any[];
  @Input() headers!:any[];
  @Input() action!:IAction;

  constructor(
    private router:Router
  ){}

  getItem(id:number){
    this.router.navigate([this.action.redirect],{queryParams:{id:id}})
  }


}

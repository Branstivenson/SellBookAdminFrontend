import { Component, Input } from '@angular/core';
import { IAction } from './model/action';
import { Router } from '@angular/router';

@Component({
  selector: 'br-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  noImage:string="../../../assets/noimage.png";
  @Input() items!:any[];
  @Input() headers!:any[];
  @Input() action!:IAction;
  @Input() loading!:boolean;
  isEmpty!:boolean;
  constructor(
    private router:Router
  ){}

  finishLoad(){
    if(this.items.length>0){
      this.isEmpty=false;
      this.loading=true;

    }else{
      this.isEmpty=true;
      this.loading=true;

    }
  }
  startLoad(){
      this.isEmpty=false;
      this.loading=false;

    
  }

  getItem(id:number){
    this.router.navigate([this.action.redirect],{queryParams:{id:id}})
  }

  errorImage(imagen:any){
    return imagen=this.noImage;
  }


}

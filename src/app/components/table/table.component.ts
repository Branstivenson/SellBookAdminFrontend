import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAction } from './model/action';
import { Router } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'br-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input() items!:any[];
  @Input() headers!:any[];
  @Input() action:IAction={
    icon: '',
    severity: ''
  };
  @Output() emitRowId:EventEmitter<any>=new EventEmitter<any>();
  noImage:string='../../../assets/noimage.png';


  constructor(
    private router:Router
  ){}

  onEmitRow(item:any){
    this.emitRowId.emit(item);
  }


}

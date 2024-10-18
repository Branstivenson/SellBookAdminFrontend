import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ToastMessageService } from './service/toast-message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{

  constructor(
    private toastMessageService:ToastMessageService
  ){
    toastMessageService.consoles.subscribe(
      (consoles:any[])=>{
        this.consoles=consoles;
      }
    );

  }

  consoles:any[]=[]
  

  hideConsole(console:any){
    this.consoles.forEach((consol)=>{if(consol.id==console.id){this.consoles.pop()}});
    
  }
}

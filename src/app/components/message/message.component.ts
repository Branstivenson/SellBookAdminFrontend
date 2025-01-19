import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ToastService } from './service/toast.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent{

  constructor(
    private toastService:ToastService
  ){
    

  }

  consoles$:Observable<any>=this.toastService.consoles;
  

  hideConsole(message:any){
    this.toastService.closeMessage(message)

  }
}

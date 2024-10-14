import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  consoles:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);



  constructor() { }

  showMessage(severity:string, message:string){
    this.consoles.subscribe(
      (consoles:any[])=>{
        consoles.push({severity,message,hidden:false});
      }
    );


  }
}

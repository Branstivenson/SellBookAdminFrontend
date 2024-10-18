import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  consoles:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);



  constructor() { }

  showMessage(severity:string, message:string, closeable:boolean=true){
    this.consoles.subscribe(
      (consoles:any[])=>{
        consoles.push({id:consoles.length+1,message:{severity,message,hidden:false, closeable}});
        console.log(this.consoles);

      }
    );


  }
}

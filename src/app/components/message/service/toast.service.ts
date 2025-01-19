import { Injectable } from '@angular/core';
import { BehaviorSubject, delay } from 'rxjs';
import { severity } from '../Model/severity';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  consoles:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);

  constructor() { }

  showMessage(severity:severity, component:string, message:string, closeable:boolean=true){
    this.consoles.subscribe(
      async (consoles:any[])=>{
        const newMessage={id:consoles.length+1,message:{severity,component,message,hidden:false, closeable}}
        consoles.push(newMessage);
        const time=4000*consoles.length
        await this.autoCloseMessage(time);
      }
    );
  }

  async autoCloseMessage(time:any){
    await this.consoles.subscribe(
      async (consoles:any[])=>{
            await setTimeout(()=>{
              consoles.shift();
            },time)
          }
      );
  }

  async closeMessage(message:any){
    await this.consoles.subscribe(
      async (consoles:any[])=>{
        const index = consoles.indexOf(message);
        if (index > -1) {
          consoles.splice(index, 1);
        }  
      }
    );
  }
}

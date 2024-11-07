import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { ToastMessageService } from '../components/message/service/toast-message.service';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  constructor(private httpClient:HttpClient, private toastMessageService:ToastMessageService) { }

  private handleError(error:HttpErrorResponse){
  if (error?.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error?.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error?.status}, body was: `, error?.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}

  post(uri:string, body:any){
    try{
      this.httpClient.post(environment.url+uri, body)
    }catch{
    }
  } 
  get(uri:string){
    return this.httpClient.get<any>(environment.url+uri)
    .pipe(
      catchError(this.handleError)
    );
  }
  getById(uri:string, id:any){
    return this.httpClient.get<any>(environment.url+uri+`/${id}`)
    .pipe(
      catchError(this.handleError)
    );
  } 

}

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { catchError, Observable, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getData(uri:string, params?:any):Observable<any>{
    return this.httpClient.get(`${environment.url}${uri}`, {
      params: new HttpParams({fromObject:params})
    }).pipe(
      catchError((error:any)=>{
        return throwError(()=> new Error(error.message))
      })
    )
  }
  getDataAuth(uri:string, params?:any):Observable<any>{
    const token=String(sessionStorage.getItem('token'))
    const headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    return this.httpClient.get(`${environment.url}${uri}`, {headers}).pipe(
      catchError((error:any)=>{
        return throwError(()=> new Error(error.message))
      })
    )
  }
  postData(uri:string,body:any):Observable<any>{
    let headers!:any;

    if(!uri.match('auth')){
      headers=new HttpHeaders().set('Authorization', `Bearer ${sessionStorage.getItem('token')}`);
    }
    return this.httpClient.post(`${environment.url}${uri}`, body).pipe(
      catchError((error:any)=>{
        return throwError(()=> new Error(error.message));
      })
    )
  }
  patchData(uri:string, id:any, body:any):Observable<any>{
    return this.httpClient.patch(`${environment.url}${uri}/${id}`, body).pipe(
      catchError((error:any)=>{
        return throwError(()=> new Error(error.message));
      })
    )
  }
  deleteData(uri:string,id:any):Observable<any>{
    return this.httpClient.delete(`${environment.url}${uri}/${id}`).pipe(
      catchError((error:any)=>{
        return throwError(()=> new Error(error.message));
      })
    )
  }

  getDecodedToken(token: string): any {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  // Método para obtener el correo electrónico del token
  setEmailFromToken() {
    let token=sessionStorage.getItem('token');
    let decodedToken = this.getDecodedToken(String(token));
    console.log(decodedToken);
    if (decodedToken) {
      let correo=decodedToken.sub;
      sessionStorage.setItem('username',correo);
      console.log(correo);
    }
    return null;
  }

}

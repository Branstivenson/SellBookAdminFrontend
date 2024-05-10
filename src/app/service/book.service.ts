import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl='http://localhost:8080/sellbook/libro';

  constructor(private httpClient:HttpClient) { }

  insert(formBook:any){
    console.log(formBook);
    return this.httpClient.post(`${this.baseUrl}/insertar`, formBook);
  }
  findAll(){
    return this.httpClient.get(`${this.baseUrl}/`)
  }

}

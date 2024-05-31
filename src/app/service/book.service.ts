import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl='http://localhost:8080/sellbook/book';

  constructor(private httpClient:HttpClient) { }

  findById(isxn:any){
    return this.httpClient.get(`${this.baseUrl}/${isxn}`)
  }
  insert(formBook:any){
    console.log(formBook);
    return this.httpClient.post(`${this.baseUrl}/insert`, formBook);
  }
  findAll(){
    return this.httpClient.get(`${this.baseUrl}/findAll`)
  }

}

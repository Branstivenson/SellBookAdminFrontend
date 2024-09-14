import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  baseUrl='http://localhost:8080/sellbook/book';

  constructor(private httpClient:HttpClient) { }

  findById(id:number){
    return this.httpClient.get(`${this.baseUrl}/id/${id}`)
  }
  findAll(){
    return this.httpClient.get(`${this.baseUrl}/allBooks`)
  }
  findByAuthorYTitle(string:String){
    return this.httpClient.get(`${this.baseUrl}/searchTitleAuthor/${string}`)
  }
  findByIsxn(isxn:String){
    return this.httpClient.get(`${this.baseUrl}/searchIsxn/${isxn}`)
  }
  insert(bookDto:any){
    console.log(bookDto);
    return this.httpClient.post(`${this.baseUrl}/insert`, bookDto);
  }

  update(bookDto:any){
    return this.httpClient.put(`${this.baseUrl}/update`, bookDto)
  }
  delete(id:number){
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl="http://localhost:8080/categoria"

  constructor(public httpClient:HttpClient) { }

  All(){
    return this.httpClient.get(`${this.baseUrl}/all`);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseUrl="http://localhost:8080/sellbook/category"

  constructor(public httpClient:HttpClient) { }

  findAll(){
    return this.httpClient.get(`${this.baseUrl}/findAll`);
  }

}

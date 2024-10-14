import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  findOneById(id:number){
    return this.httpClient.get(`${environment.url}/book/${id}`)
  }
  findAll(){
    return this.httpClient.get(`${environment.url}/book`)
  }
  findByAuthorYTitle(stringSearch:String){
    return this.httpClient.get(`${environment.url}/book/title&&authoralldata/${stringSearch}`)
  }
  findById(idSearch:String){
    return this.httpClient.get(`${environment.url}/book/id/${idSearch}`)
  }
  create(book:any){
    return this.httpClient.post(`${environment.url}/book`, book);
  }
  update(book:any){
    return this.httpClient.put(`${environment.url}/book`, book)
  }
  delete(id:number){
    return this.httpClient.delete(`${environment}/book/${id}`)
  }

}

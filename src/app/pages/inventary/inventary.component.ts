import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.css']
})
export class InventaryComponent implements OnInit{

  books!:Book[];

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.bookService.findAll().subscribe(
      (data:any)=>{
        this.books = data;
      },(error)=>{
        console.log(error);
      }
    )
  }

}

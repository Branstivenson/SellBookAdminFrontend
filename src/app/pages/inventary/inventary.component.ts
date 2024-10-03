import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IAction } from 'src/app/components/table/model/action';
import { IBook } from 'src/app/models/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-inventary',
  templateUrl: './inventary.component.html',
  styleUrls: ['./inventary.component.css']
})
export class InventaryComponent implements OnInit{

  books:any[]=[];
  hiddenLoad:boolean=true;
  hiddenTable:boolean=false;
  hiddenEmpty:boolean=true;
  checkedTituloAutor:boolean=true;
  checkedIsxn:boolean=false;
  

  tableAction:IAction={
    icon:'../../../assets/settings.svg',
    redirect:'/new-book'
  }
  tableHeaders=[
    'Imagen', 'Isxn', 'Titulo', 'Autor', 'Editorial', 'Categoria', 'Publicación', 'Unidades', 'Costo'
  ]

  constructor(private bookService:BookService,
    private router:Router
  ){}

  searchForm= new FormGroup({
    string: new FormControl('',[Validators.required])
  })

  ngOnInit(): void {
    
    this.findAll();
  }

  checkTituloAutor(){
    this.checkedTituloAutor=true;
    this.checkedIsxn=false;
   }
   checkIsxn(){
    this.checkedTituloAutor=false;
    this.checkedIsxn=true;
   }
  setHiddenEmpty(){
    if(this.books.length>0){
      this.hiddenEmpty=true;
      this.hiddenTable=false;
    }else{
      this.hiddenEmpty=false;
      this.hiddenTable=true;
    }
  }
  findAll(){
    this.bookService.findAll().subscribe(
      (bookList:any)=>{
        if(bookList==null){
          this.books=[];
        }else{
          this.books=this.mapBooksForTable(bookList);
        }
        this.setHiddenEmpty();

      },(error)=>{
        console.log(error);
      }
    )
  }

  search(string:any){
    if(this.checkedTituloAutor==true){
      this.findByAuthorYTitle(string);
    }else if(this.checkedIsxn==true){
      this.findByIsxn(string);
    }else{
      null;
    }
  }

  findByIsxn(isxn:String){
    if(this.searchForm.valid){
      this.hiddenLoad=false;
      this.hiddenTable=true;
      this.bookService.findAllByIsxn(isxn).subscribe(
        (bookList:any)=>{
          if(bookList==null){
            this.books=[];
          }else{
            this.books=this.mapBooksForTable(bookList);;
          }
          this.setHiddenEmpty();
        }
      )
      this.hiddenLoad=true;
    }
    else{
      this.findAll();
    }
  }
  
  findByAuthorYTitle(string:String){
    if(this.searchForm.valid){
      this.hiddenLoad=false;
      this.hiddenTable=true;
      this.bookService.findByAuthorYTitle(string).subscribe(
        (bookList:any)=>{
          if(bookList==null){
            this.books=[];
          }else{
            this.books=this.mapBooksForTable(bookList);;
          }
          this.setHiddenEmpty();
        }
      )
      this.hiddenLoad=true;
    }
    else{
      this.findAll();
    }
  }
  getBook(id:number){
    this.router.navigate(['/new-book'],{queryParams:{id:id}})
  }
  mapBooksForTable(bookList:any){
    return bookList.map((book:IBook)=>({
      Imagen:String(book.image),
      Isxn:String(book.isxn),
      Titulo:String(book.title),
      Autor:String(book.author),
      Editorial:String(book.editorial),
      Categoria:String(book.category.name),
      Publicación:String(book.publicationDate),
      Unidades:String(book.units),
      Costo:String(book.cost)+' COP'
    }));
  }
}

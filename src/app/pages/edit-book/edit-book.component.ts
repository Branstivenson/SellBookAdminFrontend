import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  categoryList:Category[]=[];
  idIsDisable:boolean=false;

  constructor(private categoryService:CategoryService,
    private bookService:BookService,
    private formBuilder:FormBuilder){
  }



  public formBook: FormGroup=this.formBuilder.group({
    isxn:[,[Validators.required]],
    title:['',Validators.required],
    author:['',Validators.required],
    editorial:['', Validators.required],
    publicationDate:[, Validators.required],
    units:[, Validators.required],
    cost:[, Validators.required],
    image:['', Validators.required],
    category:this.formBuilder.group({
      id:[0,[Validators.required]],
      name:['']
    })
  })

  ngOnInit(): void {
    this.findByIsxnBook(2323);
    this.findAllCategories();

  }

  
  findByIsxnBook(isxn:any){
    this.bookService.findById(isxn).subscribe(
      (data:any)=>{
        this.formBook.setValue(data);
      },(error)=>{
        console.log(error);
      })
  }

  updateBook(){
    
  }

  findAllCategories(){
    this.categoryService.findAll().subscribe(
      (data:any)=>{
        this.categoryList=data;
      },(error)=>{
        console.log(error);
      }
    )
  }

}

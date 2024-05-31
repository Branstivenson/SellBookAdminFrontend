import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category } from 'src/app/models/category';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit{

  constructor(private categoryService:CategoryService,
    private bookService:BookService,
    private formBuilder:FormBuilder){
  }

  public formBook: FormGroup=this.formBuilder.group({
    id:[,[Validators.required]],
    titulo:['',Validators.required],
    autor:['',Validators.required],
    editorial:['', Validators.required],
    anioPublicacion:[, Validators.required],
    unidades:[, Validators.required],
    costo:[, Validators.required],
    image:['', Validators.required],
    categoria:this.formBuilder.group({
      id:[0,[Validators.required]]
    })
  })

  categoryList:Category[]=[];

  ngOnInit(): void {
    this.allCategories();

  }

  insertBook(){
    this.bookService.insert(this.formBook.value).subscribe(
      (error)=>{
        console.log(error);
      }
    )
    this.formBook.reset();
  }



  allCategories(){
    this.categoryService.findAll().subscribe(
      (data:any)=>{
        this.categoryList=data;
      },(error)=>{
        console.log(error);
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from 'src/app/models/book';
import { Categoria } from 'src/app/models/categoria';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  categoryList:Categoria[]=[];
  idIsDisable:boolean=false;

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
      id:[0,[Validators.required]],
      nombre:['']
    })
  })

  ngOnInit(): void {
    this.findById(9786287715127);
    this.allCategories();

  }

  
  findById(id:any){
    this.bookService.findById(id).subscribe(
      (data:any)=>{
        this.formBook.setValue(data);
      },(error)=>{
        console.log(error);
      })
  }

  updateBook(){
    
  }

  allCategories(){
    this.categoryService.All().subscribe(
      (data:any)=>{
        this.categoryList=data;
      },(error)=>{
        console.log(error);
      }
    )
  }

}

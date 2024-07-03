import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Category } from 'src/app/models/category';
import { ResponseHttp } from 'src/app/models/response-http';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { InventaryComponent } from '../inventary/inventary.component';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  categoryList:Category[]=[];
  idIsDisable:boolean=true;
  responseHttp:ResponseHttp={status:"",message: ""};
  hiddenConsole:boolean=true;
  hiddenButtons:boolean=false;
  hiddenLoad:boolean=true;
  title:any='';

  constructor(private categoryService:CategoryService,
    private bookService:BookService,
    private activatedRoute:ActivatedRoute,
    private router:Router){
  }



  bookDto=new FormGroup({
    isxn: new FormControl('',[Validators.required]),
    title: new FormControl('',[Validators.required]),
    author: new FormControl('',[Validators.required]),
    editorial: new FormControl('',[Validators.required]),
    publicationDate: new FormControl('',[Validators.required]),
    units: new FormControl('',[Validators.required]),
    cost: new FormControl('',[Validators.required]),
    image: new FormControl('',[Validators.required]),
    category: new FormGroup({
      id: new FormControl('',[Validators.required]),
      name: new FormControl(''),
    })
   })

  ngOnInit(): void {
    this.getIsxnUrl();
    this.findByIsxnBook(this.getIsxn);
    this.findAllCategories();
    
  }

  getIsxn:any;


  getIsxnUrl(){
    this.getIsxn=this.activatedRoute.snapshot.params['isxn'];

  }
  setTitle(){
    this.title=this.bookDto.value.title;
  }
  hideConsole(){
    this.hiddenConsole=true;
  }
  showConsole(){
    this.hiddenConsole=false;
  }

  previewImage!:any;

  setPreviewImage(){
    this.previewImage=this.bookDto.value.image;
   }
   defaultPreviewImage(){
    this.previewImage="../../../assets/noimage.png";
   }


  findByIsxnBook(isxn:any){
    this.bookService.findById(isxn).subscribe(
      (data:any)=>{
        this.bookDto.setValue(data);
        this.setPreviewImage();
        this.setTitle();
      },(error)=>{
        console.log(error);
      });
  }

  delete(isxnBook:any){
    this.hiddenButtons=true;
    this.hiddenLoad=false;
    this.bookService.delete(isxnBook).subscribe(
      (data:any)=>{
        this.responseHttp=data;
        this.showConsole();
        this.hiddenLoad=true;
        if(this.responseHttp.status.match("OK")){
          
          alert(this.responseHttp.message);
          this.router.navigate(['/inventary']);

        }
      }
    );
    
    
  }

  update(bookDto:any){
    if(this.bookDto.valid){
      this.bookService.update(bookDto).subscribe(
        (info:any)=>{
          this.responseHttp=info;
          this.showConsole();
        }
       )
    }else{
      this.responseHttp={status:"ERROR", message:"Asegurate de llenar todos los campos correctamente."}
      this.showConsole();
    }
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

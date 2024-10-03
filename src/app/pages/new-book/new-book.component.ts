import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { ResponseHttp } from 'src/app/models/response-http';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit{

  id!:number;
  ifErrorPreviewImage:String='';
  previewImage!:any;
  responseHttp:ResponseHttp={status:"",message: ""}
  hiddenConsole:boolean=true;
  categoryList:ICategory[]=[];


  constructor(private categoryService:CategoryService,
    private bookService:BookService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){
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
      id: new FormControl('0',[Validators.required]),
      name: new FormControl('')
    })
   })

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        this.id=params['id']
      }
    );

    this.allCategories();
    if(this.id!=null){
      this.findByIsxnBook(this.id);
    }else{
      this.defaultPreviewImage();
    }
  }
  setPreviewImage(){
    this.previewImage=this.bookDto.value.image;
    this.ifErrorPreviewImage=this.previewImage;
  }
    defaultPreviewImage(){
    this.previewImage="../../../assets/noimage.png";
  }
  hideConsole(){
    this.hiddenConsole=true;
  }
  showConsole(){
    this.hiddenConsole=false;
  }

  insertBook(){
    if(this.bookDto.valid&&this.bookDto.value.category?.id!='0'){
      this.bookService.insert(this.bookDto.value).subscribe(
        (data:any)=>{
          this.responseHttp=data;
          if(this.responseHttp.status.match("OK")){
            this.bookDto.reset();
            this.bookDto.patchValue({
              category:{
                id:'0'
              }
          })
            this.defaultPreviewImage();
            this.showConsole();
          }
        }
      )
    }else{
      this.responseHttp.status="ERROR";
      this.responseHttp.message="Asegurate de llenar todos los campos correctamente."
      this.showConsole();
    }

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
  findByIsxnBook(isxn:any){
    this.bookService.findById(isxn).subscribe(
      (data:any)=>{
        this.bookDto.setValue(data);
        this.setPreviewImage();
      },(error)=>{
        console.log(error);
      });
  }

  update(){
    if(this.bookDto.valid&&this.bookDto.value.category?.id!='0'){
      this.bookService.update(this.bookDto.value).subscribe(
        (info:any)=>{
          this.responseHttp=info;
          this.showConsole();
        },(error)=>{
          this.responseHttp={status:"ERROR", message:error}
          this.showConsole();

        }
       )
    }else{
      this.responseHttp={status:"ERROR", message:"Asegurate de llenar todos los campos correctamente."}
      this.showConsole();
    }
  }
  delete(isxnBook:any){
    this.bookService.delete(isxnBook).subscribe(
      (data:any)=>{
        this.responseHttp=data;
        this.showConsole();
        if(this.responseHttp.status.match("OK")){
          
          alert(this.responseHttp.message);
          this.router.navigate(['/inventary']);

        }
      }
    );
    
    
  }

  onSubmit(){
    if(this.id!=null){
      this.update();
    }else{
      this.insertBook();
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastMessageService } from 'src/app/components/message/service/toast-message.service';
import { ICategory } from 'src/app/models/category';
import { ResponseHttp } from 'src/app/models/response-http';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';
import { handleErrors } from '../helpers/handleerrors';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit{

  id!:number;
  ifErrorPreviewImage:String='';
  previewImage!:any;
  showInConsole:ResponseHttp={status:'',message: ''}
  hiddenConsole:boolean=true;
  categoryList:ICategory[]=[];


  constructor(private categoryService:CategoryService,
    private bookService:BookService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastMessageService:ToastMessageService
  ){
  }

   formBook=new FormGroup({
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
      this.findOneById();
    }else{
      this.defaultPreviewImage();
      this.formBook.reset();
    }
  }
  setPreviewImage(){
    this.previewImage=this.formBook.value.image;
    this.ifErrorPreviewImage=this.previewImage;
  }
    defaultPreviewImage(){
    this.previewImage="../../../assets/noimage.png";
  }

  insertBook(){
    if(this.formBook.valid&&this.formBook.value.category?.id!='0'){
      this.bookService.create(this.formBook.value).subscribe(
        (data:any)=>{
          this.formBook.reset();
          this.formBook.patchValue({
            category:{
              id:'0'
            }
        })
            this.defaultPreviewImage();
          }
      )
    }else{
      this.showInConsole={status:"danger", message:"Asegurate de llenar todos los campos correctamente."}
      this.hiddenConsole=false
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
  findOneById(){
    this.bookService.findOneById(this.id).subscribe(
      (data:any)=>{
        this.formBook.setValue(data.response);
        this.formBook.get('isxn')?.disable();
        this.setPreviewImage();
      },(error)=>{
        handleErrors(error, this.toastMessageService)
      });
  }

  update(){
    if(this.formBook.valid&&this.formBook.value.category?.id!='0'){
      this.bookService.update(this.formBook.value).subscribe(
        (data:any)=>{
        },(error)=>{
        }
       )
    }else{
      this.showInConsole={status:"danger", message:"Asegurate de llenar todos los campos correctamente."}
      this.hiddenConsole=false
    }
  }
  delete(isxnBook:any){
    this.bookService.delete(isxnBook).subscribe(
      (data:any)=>{
        this.showInConsole=data;
        this.hiddenConsole=false
        if(this.showInConsole.status.match("OK")){
          
          alert(this.showInConsole.message);
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

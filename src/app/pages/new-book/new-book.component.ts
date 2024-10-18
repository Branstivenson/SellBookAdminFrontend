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
  imagePreview:string="../../../assets/noimage.png";
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
      this.getBook();
    }
  }

  insertBook(){
      this.bookService.create(this.formBook.value).subscribe(
        (data:any)=>{
          this.formBook.reset();
          this.formBook.patchValue({
            category:{
              id:'0'
            }
          });
          this.toastMessageService.showMessage(
            'success',
            data.response
          );
        },(error)=>{
          handleErrors(error,this.toastMessageService);
        }
      )
    

  }

  onChangeImage(){
    if(this.formBook.value.image!=null){
      this.imagePreview=String(this.formBook.value.image);
    }else{
      this.imagePreview="../../../assets/noimage.png";

    }
  }
  onErrorImage(){
    this.imagePreview="../../../assets/noimage.png";
    this.toastMessageService.showMessage(
      'danger',
      'Imagen de la url invalida.'
    )
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
  getBook(){
    this.bookService.findOneById(this.id).subscribe(
      (data:any)=>{
        this.formBook.setValue(data.response);
        this.formBook.get('isxn')?.disable();
        this.imagePreview=data.response.image;
      },(error)=>{
        handleErrors(error, this.toastMessageService)
      });
  }

  update(){
      this.bookService.update(this.id,this.formBook.value).subscribe(
        (data:any)=>{
          if(data.status=='NOT_MODIFIED'){
            this.toastMessageService.showMessage(
              'warning',
              data.response
            )
          }else{
            this.toastMessageService.showMessage(
              'success',
              data.response
            )
            this.router.navigateByUrl('/inventary');
          }
        },(error)=>{
          handleErrors(error, this.toastMessageService);
        }
       )
  }
  delete(isxnBook:any){
    this.bookService.delete(isxnBook).subscribe(
      (data:any)=>{
        this.toastMessageService.showMessage(
          'success',
          data.response
        )
        this.router.navigateByUrl('/inventary')
      },(error)=>{
        handleErrors(error, this.toastMessageService);
      }

    );
    
    
  }

  onSubmit(){
    if(this.formBook.invalid&&this.formBook.value.category?.id=='0'){
      return this.toastMessageService.showMessage(
        'danger',
        'Asegurate de llenar todos los campos correctamente'
      )
    }
    if(this.id!=null){
      this.update();
    }else{
      this.insertBook();
    }
  }

}

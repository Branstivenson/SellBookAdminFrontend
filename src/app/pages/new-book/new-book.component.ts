import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICategory } from 'src/app/models/category';
import { ResponseHttp } from 'src/app/models/response-http';
import { handleErrors } from '../helpers/handleerrors';
import { MainService } from 'src/app/services/main.service';
import { ToastService } from 'src/app/components/message/service/toast.service';

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


  constructor(
    private mainService:MainService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastService:ToastService,
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
      this.mainService.postData('book',this.formBook.value).subscribe(
        (data:any)=>{
          this.formBook.reset();
          this.formBook.patchValue({
            category:{
              id:'0'
            },
          });
          this.imagePreview="../../../assets/noimage.png"
          this.toastService.showMessage(
            'success',
            'Book',
            data.response
          );
        },(error)=>{
          handleErrors(error,this.toastService);
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
    this.toastService.showMessage(
      'danger',
      'Book',
      'Imagen de la url invalida.'
    )
  }

  allCategories(){
    this.mainService.getData('category').subscribe(
      (data:any)=>{
        this.categoryList=data;
      },(error)=>{
        console.log(error);
      }
    )
  }
  getBook(){
    this.mainService.getData('book/'+this.id).subscribe(
      (data:any)=>{
        this.formBook.setValue(data.response);
        this.formBook.get('isxn')?.disable();
        this.imagePreview=data.response.image;
      },(error)=>{
        handleErrors(error, this.toastService)
      });
  }

  update(){
      this.mainService.patchData( 'book/', this.id,this.formBook.value).subscribe(
        (data:any)=>{
          if(data.status=='NOT_MODIFIED'){
            this.toastService.showMessage(
              'warning',
              'Book',
              data.response
            )
          }else{
            this.toastService.showMessage(
              'success',
              'Book',
              data.response
            )
            this.router.navigateByUrl('/inventary');
          }
        },(error)=>{
          handleErrors(error, this.toastService);
        }
       )
  }
  delete(id:any){
    this.mainService.deleteData( 'book',id).subscribe(
      (data:any)=>{
        this.toastService.showMessage(
          'success',
          'Book',
          data.response
        )
        this.router.navigateByUrl('/inventary')
      },(error)=>{
        handleErrors(error, this.toastService);
      }

    );
    
    
  }

  onSubmit(){
    if(this.formBook.invalid&&this.formBook.value.category?.id=='0'){
      return this.toastService.showMessage(
        'danger',
        'Book',
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

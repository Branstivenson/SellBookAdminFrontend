import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/pages/cart/service/cart.service';

@Component({
  selector: 'br-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit{

  constructor(
    private router:Router,
    private cartService:CartService
  ){}

  ngOnInit(): void {
    this.setScrollProperty();
  }

  @Input() items:any[]=[];
  @Input() scrollable:string='false';
  @Input() redirect:string='';
  scrollClass!:string;
  noImage:string="../../../assets/noimage.png"

  goSearchingById(id:string){
    this.router.navigate([this.redirect],{queryParams:{id:id}})
  }

  setScrollProperty(){
    if(this.scrollable=='true'){
      this.scrollClass='scroll-cards';
    }else{
      this.scrollClass='wrap row gap-3';
    }
  }
  addToCart(item:any){
    this.cartService.addOne(item);
    console.log(item,'thumb')
  }
}

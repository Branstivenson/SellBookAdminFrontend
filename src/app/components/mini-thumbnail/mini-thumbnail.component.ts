import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/pages/cart/service/cart.service';

@Component({
  selector: 'br-mini-thumbnail',
  templateUrl: './mini-thumbnail.component.html',
  styleUrls: ['./mini-thumbnail.component.css']
})
export class MiniThumbnailComponent implements OnInit{

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

  addToCart(item:any){
    this.cartService.addOne(item);
  }
  setScrollProperty(){
    if(this.scrollable=='true'){
      this.scrollClass='scroll-cards';
    }else{
      this.scrollClass='';
    }
  }
}

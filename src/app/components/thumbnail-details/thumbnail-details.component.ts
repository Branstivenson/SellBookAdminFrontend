import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/pages/cart/service/cart.service';

@Component({
  selector: 'br-thumbnail-details',
  templateUrl: './thumbnail-details.component.html',
  styleUrls: ['./thumbnail-details.component.css']
})
export class ThumbnailDetailsComponent {

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
  totalCost$:Observable<number>=this.cartService.getTotal();
  totalCostLength=String(this.cartService.costo.value);

  scrollClass!:string;
  noImage:string="../../../assets/noimage.png"

  goSearchingById(id:string){
    this.router.navigate([this.redirect],{queryParams:{id:id}})
  }

  setScrollProperty(){
    if(this.scrollable=='true'){
      this.scrollClass='scroll-cards';
    }else{
      this.scrollClass='';
    }
  }
  addToCart(item:any){
    this.cartService.addOne(item);
    console.log(item,'thumb')
  }
}

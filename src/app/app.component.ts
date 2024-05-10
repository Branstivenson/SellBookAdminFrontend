import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { InventaryComponent } from './pages/inventary/inventary.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SellBookAdminFrontend';

  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.navigate(['sellbookadmin']);
  }

}

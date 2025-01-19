import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    component:InventaryComponent,
    path:'inventary',
    pathMatch:'full'
  },{
    component:NewBookComponent,
    path:'new-book',
    pathMatch:'full'
  },{
    component:HomeComponent,
    path:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

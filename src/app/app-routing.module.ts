import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { NewBookComponent } from './pages/new-book/new-book.component';

const routes: Routes = [
  {
    component:InventaryComponent,
    path:'inventary',
    pathMatch:'full'
  },{
    component:NewBookComponent,
    path:'new-book',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

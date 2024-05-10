import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InventaryComponent } from './pages/inventary/inventary.component';

const routes: Routes = [
  {
    component:InventaryComponent,
    path:'sellbookadmin',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

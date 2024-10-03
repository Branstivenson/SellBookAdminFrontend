import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewBookComponent } from './pages/new-book/new-book.component';
import { InventaryComponent } from './pages/inventary/inventary.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonDirective } from './components/button/button.directive';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    InventaryComponent,
    NavbarComponent,
    ButtonDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { ButtonSearchBarDirective } from './components/search-bar/button-search-bar.directive';
import { InputSearchBarDirective } from './components/search-bar/input-search-bar.directive';
import { InputDirective } from './components/input/input.directive';
import { DropdownDirective } from './components/dropdown/dropdown.directive';
import { ConsoleComponent } from './components/console/console.component';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    InventaryComponent,
    NavbarComponent,
    ButtonDirective,
    TableComponent,
    ButtonSearchBarDirective,
    InputSearchBarDirective,
    InputDirective,
    DropdownDirective,
    ConsoleComponent,
    MessageComponent
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

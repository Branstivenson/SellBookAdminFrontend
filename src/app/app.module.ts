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
import { MessageComponent } from './components/message/message.component';
import { SearchBarComponent } from './components/search-bar/search-bar/search-bar.component';
import { IconDirective } from './components/icon/icon.directive';
import { ToastService } from './components/message/service/toast.service';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewBookComponent,
    NavbarComponent,
    ButtonDirective,
    TableComponent,
    ButtonSearchBarDirective,
    InputSearchBarDirective,
    InputDirective,
    DropdownDirective,
    MessageComponent,
    SearchBarComponent,
    InputSearchBarDirective,
    ButtonSearchBarDirective,
    InputDirective,
    IconDirective,
    InventaryComponent,
    MessageComponent,
    HomeComponent,
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

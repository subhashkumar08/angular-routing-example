import { NgModule }   from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {BookService} from './services/book.service'
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewdetailComponent,
    UpdateBookComponent,
    AddBookComponent,
    ManageBookComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
	  AppRoutingModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }

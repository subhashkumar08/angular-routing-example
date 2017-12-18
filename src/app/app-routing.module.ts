import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { ViewdetailComponent } from './viewdetail/viewdetail.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ManageBookComponent } from './manage-book/manage-book.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-detail/:id', component: ViewdetailComponent } ,
  { path: 'update-book/:id', component: UpdateBookComponent } ,
  { path: 'add-book', component: AddBookComponent },
  { path: 'manage-book', component: ManageBookComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full' } //update-book
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manage-book',
  templateUrl: './manage-book.component.html',
  styleUrls: ['./manage-book.component.css']
})
export class ManageBookComponent implements OnInit {

  books : Book[];
  book : Book;

  
  constructor(private router: Router, private bookSerivce : BookService) { }
  ngOnInit() {
    this.getBooks();
  }
  getBooks(){
    this.bookSerivce.getBooks().then(books => this.books = books);
  }
  updateBook(id:number):void {
    this.router.navigate(['/update-book',id]);
  }

  deleteBook(id:number): void {
    this.bookSerivce.deleteBook(id);
}

}

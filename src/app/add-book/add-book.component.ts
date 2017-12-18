import { Component, OnInit } from '@angular/core';
import { Book } from '../services/book';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books: Book[];
  book: Book = new Book();
  constructor(private router: Router,
        private bookService: BookService) { }
        
  getBooks(): void {
      this.bookService.getBooks().then(books => this.books = books);
  }
  ngOnInit(): void {
      this.getBooks();
  }
  addBook(): void {
      this.bookService.addBook(this.book);
      this.router.navigate(['/home']);
  }	

}

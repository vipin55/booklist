import { Component, OnInit } from '@angular/core';
import { BookListService } from '../book-list.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;

  constructor(private bookListService: BookListService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.books = this.bookListService.getBooks().subscribe((data: any) => {
      this.books = data;
    })
  }

}

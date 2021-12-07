import { Component, OnInit, ViewChild, } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookListService } from '../book-list.service';

export interface BookList {
  title: string;
  description: string;
  publishDate: string;

}

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})

export class BookListComponent implements OnInit {
  books: any;
  sortedData: any;

  constructor(private bookListService: BookListService) {
    this.getBooks();
  }

  ngOnInit(): void { }

  getBooks(): void {
    this.books = this.bookListService.getBooks().subscribe((data: any) => {
      this.books = data;
      this.sortedData = data;
    })
  }

  sortData(sort: Sort) {
    const data = this.books.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title':
          return compare(a.title, b.title, isAsc);
        case 'publishDate':
          return compare(a.publishDate, b.publishDate, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

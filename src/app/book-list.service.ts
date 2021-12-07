import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookListService {

  constructor(private http: HttpClient) { }
  public getBooks() {
    return this.http
      .get('https://fakerestapi.azurewebsites.net/api/v1/Books');
  }
}

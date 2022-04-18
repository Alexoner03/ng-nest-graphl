import { Component, OnInit } from '@angular/core';
import { ListAllBooksGQL } from "../../services/queries/allBooks.generated";
import { map } from "rxjs";
import { Book } from "../../models/book.model";

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styles: [
  ]
})
export class ListBooksComponent implements OnInit {

  books: Book[] = []

  constructor(private allBooksGQL: ListAllBooksGQL) { }

  ngOnInit(): void {
    this.allBooksGQL.watch({},{fetchPolicy: "no-cache"}).valueChanges
      .pipe(
        map(result => result.data.listAllBooks)
      ).subscribe(result => this.books = result);
  }

}

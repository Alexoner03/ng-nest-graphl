import { Component, OnInit } from '@angular/core';
import { Author } from "../../models/author.model";
import { ListAllAuthorsGQL } from "../../services/queries/allAuthors.generated";
import { map } from "rxjs";

@Component({
  selector: 'app-list-authors',
  templateUrl: './list-authors.component.html',
  styles: [
  ]
})
export class ListAuthorsComponent implements OnInit {

  authors: Author[] = []

  constructor(private listAllAuthor: ListAllAuthorsGQL) { }

  ngOnInit(): void {
    this.listAllAuthor.watch({},{fetchPolicy: "no-cache"}).valueChanges
      .pipe(
        map(result => result.data.listAllAuthors)
      ).subscribe(result => this.authors = result)
  }

}

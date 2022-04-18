import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBooksComponent } from './pages/list-books/list-books.component';
import { PrimengModule } from "../primeng/primeng.module";
import { ListAuthorsComponent } from './pages/list-authors/list-authors.component';
import { CreateBookComponent } from './pages/create-book/create-book.component';
import { CreateAuthorComponent } from './pages/create-author/create-author.component';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [
    ListBooksComponent,
    ListAuthorsComponent,
    CreateBookComponent,
    CreateAuthorComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListBooksComponent,
    ListAuthorsComponent,
    CreateAuthorComponent,
    CreateBookComponent
  ]
})
export class BooksModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBooksComponent } from "./books/pages/list-books/list-books.component";
import { ListAuthorsComponent } from "./books/pages/list-authors/list-authors.component";
import { CreateBookComponent } from "./books/pages/create-book/create-book.component";
import { CreateAuthorComponent } from "./books/pages/create-author/create-author.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "books"
  },
  {
   path: "books",
   children: [
     {
       path: "",
       pathMatch: "full",
       component: ListBooksComponent
     },
     {
       path: "create",
       component: CreateBookComponent
     }
   ],
  },
  {
    path: "authors",
    children: [
      {
        path: "",
        pathMatch: "full",
        component: ListAuthorsComponent
      },
      {
        path: "create",
        component: CreateAuthorComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

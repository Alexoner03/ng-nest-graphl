import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Author } from "../../models/author.model";
import { ListAllAuthorsGQL } from "../../services/queries/allAuthors.generated";
import { map } from "rxjs";
import { CreateBookGQL } from "../../services/mutations/createBook.generated";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styles: [
  ]
})
export class CreateBookComponent implements OnInit {

  formBook!: FormGroup
  authors: Author[] = [];

  constructor(
    private fb: FormBuilder,
    private listAllAuthors : ListAllAuthorsGQL,
    private createAuthorGQL: CreateBookGQL,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formBook = this.initForm()
    this.listAllAuthors.watch().valueChanges
      .pipe(
        map(result => result.data.listAllAuthors)
      ).subscribe(result => this.authors = result)
  }

  initForm():FormGroup {
    return this.fb.group({
      title : ['',[Validators.required, Validators.minLength(3)]],
      author: this.fb.group({
        id: ['', Validators.required]
      }),
    })
  }

  sendForm(){
    this.createAuthorGQL.mutate({
      bookBody :  this.formBook.value
    }).subscribe(() => this.router.navigate(['/books']))
  }
}

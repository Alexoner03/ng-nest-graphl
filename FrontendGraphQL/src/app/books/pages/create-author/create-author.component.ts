import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateAuthorGQL } from "../../services/mutations/createAuthor.generated";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-author',
  templateUrl: './create-author.component.html',
  styles: [
  ]
})
export class CreateAuthorComponent implements OnInit {

  formBook!: FormGroup

  constructor(
    private fb: FormBuilder,
    private createAuthorGQL: CreateAuthorGQL,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.formBook = this.initForm()
  }

  initForm():FormGroup {

    return this.fb.group({
      name : ['',[Validators.required, Validators.minLength(3)]],
      books: this.fb.array([]),
    })
  }

  sendForm(){
    this.createAuthorGQL.mutate({
      authorBody : this.formBook.value
    }).subscribe(() => {
      this.router.navigate(['/authors'])
    })
  }

  addBook({ value }: any) {
    this.formBook.value.books.push({title : value})
  }

}

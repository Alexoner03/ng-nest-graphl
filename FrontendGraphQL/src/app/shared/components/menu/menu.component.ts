import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements OnInit {

  constructor() { }

  items?: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Books',
        routerLink: 'books',
        icon: PrimeIcons.BOOK
      },
      {
        label: 'Authors',
        routerLink: 'authors',
        icon: PrimeIcons.USER
      }
    ];
  }
}

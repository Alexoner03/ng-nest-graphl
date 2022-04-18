import { NgModule } from '@angular/core';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from "primeng/button";
import { SharedModule } from "primeng/api";
import { TableModule } from "primeng/table";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";



@NgModule({
  exports: [
    MenubarModule,
    InputTextModule,
    ButtonModule,
    SharedModule,
    TableModule,
    ChipsModule,
    DropdownModule,
  ]
})
export class PrimengModule { }

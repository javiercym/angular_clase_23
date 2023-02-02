import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HomeComponent,
    PostComponent
  ]
})
export class PagesModule { }

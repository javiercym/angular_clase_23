import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ComponenteComponent } from './componente/componente.component';
import { TableComponent } from './table/table.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    HomeComponent,
    PostComponent,
    ComponenteComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
    MatCheckboxModule,
    MatTableModule
  ],
  exports: [
    HomeComponent,
    PostComponent,
    ComponenteComponent,
    TableComponent
  ]
})
export class PagesModule { }

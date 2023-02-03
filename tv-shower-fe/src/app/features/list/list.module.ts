import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './list.component';
import {ListItemComponent} from "./list-item.component";

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: ':edit', component: ListComponent }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ListItemComponent
  ]
})
export class ListModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddShowComponent } from './add-show.component';
import {ReactiveFormsModule} from "@angular/forms";


const routes: Routes = [
  { path: '', component: AddShowComponent }
];

@NgModule({
  declarations: [AddShowComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
})
export class AddShowModule {}

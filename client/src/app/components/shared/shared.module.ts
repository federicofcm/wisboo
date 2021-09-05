import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material


// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ]
})
export class SharedModule { }

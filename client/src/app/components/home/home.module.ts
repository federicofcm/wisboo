import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../components/shared/shared.module';

import { CreateFormComponent } from './create-form/create-form.component';
import { QuestionComponent } from './create-form/question/question.component';

@NgModule({
  declarations: [
    CreateFormComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateFormComponent
  ]
})
export class HomeModule { }

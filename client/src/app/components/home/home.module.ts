import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { SharedModule } from '../../components/shared/shared.module';

import { CreateFormComponent } from './create-form/create-form.component';
import { QuestionComponent } from './create-form/question/question.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { OptionComponent } from './create-form/question/option/option.component';

@NgModule({
  declarations: [
    CreateFormComponent,
    QuestionComponent,
    DisplayFormComponent,
    OptionComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateFormComponent,
    DisplayFormComponent
  ]
})
export class HomeModule { }

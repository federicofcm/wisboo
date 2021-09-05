import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface QuestionType {
  value: string;
}

export interface Option {
  value: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questionTypes: string[] = ["Text", "Seleccion multiple", "Seleccion simple"];
  selectedQuestionType: any;
  optionIndex: any;
  options: Option[] = [];

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      questionType: [this.selectedQuestionType, Validators.required]
    }); 
  }

  ngOnInit(): void {
    this.selectedQuestionType = "Text"
    this.optionIndex = 1;
  }

  addOption() {
    
  }

}

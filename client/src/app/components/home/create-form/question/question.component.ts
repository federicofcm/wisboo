import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface QuestionType {
  value: string;
}

export interface Option {
  index: number;
  value: string;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() form: FormGroup;
  @Output() onChangeForm = new EventEmitter<any>();

  questionTypes: {value: string, name: string}[] = [
    {
      value: 'Seleccion multiple',
      name: "Seleccion multiple"
    },
    {
      value: 'Seleccion multiple',
      name: "Seleccion simple"
    },
    {
      value: 'Texto',
      name: "Texto"
    }
  ];

  get questionsArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  getQuestionsGroup(i : number): FormGroup {
    return this.questionsArray.at(i) as FormGroup;
  }

  getOptionsArray(i : number): FormArray {
    return this.questionsArray.at(i).get("options") as FormArray;
  }

  constructor(private fb : FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.form.value.questions.forEach((question: {}, index: number) => {
      this.getOptionsArray(index).push(this.createOption());
    });
  }

  createOption(): FormGroup {
    return this.fb.group({value: ["", Validators.required]});
  }

  addOption(i: number): void {
    this.getOptionsArray(i).push(this.createOption());
  }

  removeQuestion(index: number): void {
    this.questionsArray.removeAt(index);
  }

}

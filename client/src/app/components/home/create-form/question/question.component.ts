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

  optionNumber: number;

  get questionsArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  get optionsArray(): FormArray {
    return this.form.get('options') as FormArray;
  }

  constructor(private fb : FormBuilder) { 
    this.optionNumber = 1;
    this.form = this.fb.group({
      options: this.fb.array([
        this.createOption()
      ])
    })
    console.log("logging form in constructor", this.form);
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formValue => {
      this.onChangeForm.emit(formValue);
    })
    this.onChangeForm.emit(this.form.value);
  }

  createOption(): FormGroup {
    return this.fb.group({
      index: [this.optionNumber++], 
      value: ["", Validators.required]
    })
  }

  addOption(): void {
    console.log(this.optionsArray)
    this.optionsArray.push(this.createOption());
  }

  removeQuestion(index: number): void {
    this.questionsArray.removeAt(index);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  form: FormGroup;

  get questionsArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  constructor(private fb : FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      questions: this.fb.array([
        this.createQuestion()
      ])
    })
  }

  addQuestion(): void {
    this.questionsArray.push(this.createQuestion());
  }

  createQuestion(): FormGroup {
    return this.fb.group({
      questionType: ['Seleccion multiple'],
      text: [''],
      options: ['']
    })
  }

  ngOnInit(): void {
    console.log(this.form);
  }

  onSubmit() {
    console.log(this.form.value);
  }

}

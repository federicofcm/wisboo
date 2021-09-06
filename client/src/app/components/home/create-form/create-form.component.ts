import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {
  @Output() onChangeForm = new EventEmitter<FormGroup>();
  form: FormGroup;

  get questionsArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  constructor(private fb : FormBuilder, private _formService : FormService) {
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
      options: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formValue => {
      this._formService.updateForm(formValue);
    })
    this._formService.updateForm(this.form.value);
  }

  onSubmit() {
    console.log(this.form.value);
    this._formService.postForm(this.form.value);
  }

}

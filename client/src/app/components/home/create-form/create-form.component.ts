import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { FormService } from 'src/app/services/form.service';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private fb : FormBuilder, private formService : FormService, private snackBar: MatSnackBar) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
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
      text: ['', Validators.required],
      options: this.fb.array([])
    })
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(formValue => {
      this.formService.updateForm(formValue);
    })
    this.formService.updateForm(this.form.value);
  }

  onSubmit() {
    this.formService.postForm(this.form.value).subscribe(
      response => {if (response.status == 200) this.showSnackBar("Encuesta creada con exito!")},
      error => this.showSnackBar(error.message)
    );
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, "OK" ,{
      duration: 5000,
    });
  }

}

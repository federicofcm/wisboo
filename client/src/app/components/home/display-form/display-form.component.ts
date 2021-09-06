import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import Form from 'src/app/interfaces/form';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import Question from 'src/app/interfaces/question';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
  form: FormGroup;

  get questionsArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  getOptions(i : number): FormArray {
    return this.questionsArray.at(i).get("options") as FormArray;
  }

  constructor(private _formService : FormService, private fb : FormBuilder) { 

  }

  ngOnInit(): void {
    this._formService.currentForm.subscribe(message => {
      this.form = this.createForm(message);
    });
  }

  createForm(message : Form) {
    return this.fb.group({
      name: [message.name],
      description: [message.description],
      questions: this.fb.array(this.createQuestions(message.questions))
    });
  }

  createQuestions(questions : Question[]): FormGroup[] {
    return questions.map(question => {
      return this.fb.group({
        questionType: [question.questionType],
        text: [question.text],
        options: [question.options]
      })
    })
  }
}

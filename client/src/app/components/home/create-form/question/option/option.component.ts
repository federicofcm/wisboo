import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() questionIndex: number;
  @Input() questionFormGroup: FormGroup;

  get questionsArray(): FormArray {
    return this.form.get('questions') as FormArray;
  }

  get optionsArray(): FormArray {
    return this.questionsArray.at(this.questionIndex).get("options") as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

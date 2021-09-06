import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {
  @Input() form: FormGroup;

  get optionsArray(): FormArray {
    return this.form.get('options') as FormArray;
  }

  constructor() { }

  ngOnInit(): void {
    console.log("loggin from option component", this.form);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  form: FormGroup;

  constructor(private fb : FormBuilder) { 
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: ['']
    })
  }

  ngOnInit(): void {
  }

  sendForm() {
    
  }

}

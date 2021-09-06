import { Component, OnInit, Input } from '@angular/core';
import { FormService } from 'src/app/services/form.service';
import Form from 'src/app/interfaces/form';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})
export class DisplayFormComponent implements OnInit {
  @Input() form: any;

  constructor(private _formService : FormService) { }

  ngOnInit(): void {
    console.log("logging form from display", this.form);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Form from '../interfaces/form';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private messageSource = new BehaviorSubject<any>("");
  currentForm = this.messageSource.asObservable();

  responseForm: Form;

  constructor(private httpClient : HttpClient) { }

  postForm(form : Form) {
    console.log("Sending request", form);
    const response = this.httpClient.post<Form>('http://localhost:1337/api/forms', form)
    .subscribe(
      data => {this.responseForm = data;},
      error => {console.log("Error while sending request:", error.message);}
      );
  }

  updateForm(form: Form) {
      this.messageSource.next(form);
  }
}

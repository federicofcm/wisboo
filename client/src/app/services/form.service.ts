import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Form from '../interfaces/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  createdForm: Form;

  constructor(private httpClient : HttpClient) { }

  postForm(form : Form) {
    console.log("Sending request", form);
    const response = this.httpClient.post<Form>('http://localhost:1337/api/forms', form)
    .subscribe(
      data => {this.createdForm = data;},
      error => {console.log("Error while sending request:", error.message);}
      );
  }
}

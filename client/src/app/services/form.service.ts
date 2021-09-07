import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import Form from '../interfaces/form';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private messageSource = new BehaviorSubject<any>("");
  currentForm = this.messageSource.asObservable();

  responseForm: Form;

  constructor(private httpClient : HttpClient) { }

  postForm(form : Form): Observable<HttpResponse<Form>> {
    console.log("Sending request", form);
    return this.httpClient.post<Form>('http://localhost:1337/api/forms', form, { observe: 'response'} );
  }

  updateForm(form: Form) {
      this.messageSource.next(form);
  }
}

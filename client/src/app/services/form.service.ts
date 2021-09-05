import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private httpClient : HttpClient) { }

  postForm() {
    this.httpClient.post<any>('http://localhost:1337/api/forms', {/*body*/});
  }
}

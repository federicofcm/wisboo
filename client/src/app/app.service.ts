import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public httpClient : HttpClient) { }

  getForm(): Observable<any> {
    return this.httpClient.get('http://localhost:1337/api/forms/6133a65422bd2959aee71d91');
  }
}

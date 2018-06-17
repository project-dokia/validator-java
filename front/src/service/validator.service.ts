import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Document } from '../model/document';
// import { input } from '../model/input';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private validatorURL = environment.apiUrl + '/validator';

//   getvalidatorsObservable(): Observable<Object> {
//     return this.http.get<validator[]>(this.validatorURL)
//   }

  insertValidatorObservable(document: Document) : Observable<Object> {
    return this.http.post<Object>(this.validatorURL, document);
  }

}

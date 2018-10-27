import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Document } from '../model/document';
import { ResultRule } from '../model/result-rule';
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

  insertValidatorObservable(document: Document) : Observable<ResultRule> {
    return this.http.post<ResultRule>(this.validatorURL, document);
  }

}

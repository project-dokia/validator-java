import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Field } from '../model/field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private fieldURL = environment.apiUrl + '/field';

  getFieldsObservable(): Observable<Object> {
    return this.http.get<Field[]>(this.fieldURL)
  }

  insertFieldObservable(field: Field) : Observable<Object> {
    return this.http.post<Object>(this.fieldURL, field);
  }

}

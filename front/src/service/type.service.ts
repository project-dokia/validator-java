import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Type } from '../model/type';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private typeURL = environment.apiUrl + '/type';

  getTypesObservable(): Observable<Object> {
    return this.http.get<Type[]>(this.typeURL)
  }

  insertTypeObservable(type: Type) : Observable<Object> {
    return this.http.post<Object>(this.typeURL, type);
  }

}

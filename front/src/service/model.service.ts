import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Model } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private modelURL = environment.apiUrl + '/model';

  getModelsObservable(): Observable<Object> {
    return this.http.get<Model[]>(this.modelURL)
  }

  insertModelObservable(model: Model) : Observable<Object> {
    return this.http.post<Object>(this.modelURL, model);
  }

}

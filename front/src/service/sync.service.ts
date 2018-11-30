import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SyncService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private syncURL = environment.apiUrl + '/sync';

  syncObservable(): Observable<Object> {
    return this.http.get<Object>(this.syncURL)
  }

  getLastSyncObservable(): Observable<Object> {
    return this.http.get<Object>(this.syncURL + "/lastSync");
  }
}

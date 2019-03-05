import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Model } from '../model/model';
import { Permission } from 'src/model/permission';
import { TypeAccess } from 'src/model/type-access';

@Injectable({
  providedIn: 'root'
})
export class TypeAccessService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private typeAccessURL = environment.apiUrl + '/type-access';

  getAllPermissions(): Observable<Array<Permission>> {
    return this.http.get<Array<Permission>>(this.typeAccessURL + "/all-permissions")
  }

  getAll(): Observable<Array<TypeAccess>> {
    return this.http.get<Array<TypeAccess>>(this.typeAccessURL)
  }

  insertTypeAccess(typeAccess: TypeAccess) : Observable<Object> {
    return this.http.post<Object>(this.typeAccessURL, typeAccess);
  }
}

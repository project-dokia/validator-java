import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Client } from 'src/model/client';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(public http: HttpClient) { }

    private headers = new HttpHeaders().set('Content-Type', 'application/json');
    private typeAccessURL = environment.apiUrl + '/client';

    getAll(): Observable<Array<Client>> {
        return this.http.get<Array<Client>>(this.typeAccessURL)
    }

    insertClient(typeAccess: Client): Observable<Object> {
        return this.http.post<Object>(this.typeAccessURL, typeAccess);
    }

}

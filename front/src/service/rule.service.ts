import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Rule } from '../model/rule';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private ruleURL = environment.apiUrl + '/rule';

  getRulesObservable(): Observable<Object> {
    return this.http.get<Rule[]>(this.ruleURL)
  }

  insertRuleObservable(rule: Rule) : Observable<Object> {
    return this.http.post<Object>(this.ruleURL, rule);
  }

}

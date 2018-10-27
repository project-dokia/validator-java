import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Rule } from '../model/rule';
import { FieldRule } from '../model/field-rule';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private ruleURL = environment.apiUrl + '/rule';
 
 
  getRuleByIdObservable(_id:String): Observable<Rule> {
    return this.http.get<Rule>(this.ruleURL + "/" + _id);
  }


  updatePercentageObservable(idRule: String, importantAcceptancePercentage: String, acceptancePercentage: String) : Observable<Object> {
    return this.http.post<Object>(this.ruleURL + "/update-percentage/" + idRule + "/" + importantAcceptancePercentage + "/" + acceptancePercentage, {});
  }


  getRulesObservable(): Observable<Object> {
    return this.http.get<Rule[]>(this.ruleURL)
  }

  insertRuleObservable(rule: Rule) : Observable<Object> {
    return this.http.post<Object>(this.ruleURL, rule);
  }
  
  removeFieldFromRule(fieldRule: FieldRule) : Observable<Object> {
    return this.http.post<Object>(this.ruleURL + "/remove-field", fieldRule);
  }

  addFieldFromRule(fieldRule: FieldRule) : Observable<Object> {
    return this.http.post<Object>(this.ruleURL + "/add-field", fieldRule);
  }

}

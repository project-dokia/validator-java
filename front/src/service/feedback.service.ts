import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(public http: HttpClient) {}

  private headers =  new HttpHeaders().set('Content-Type', 'application/json');
  private feedbackURL = environment.apiUrl + '/feedback';

  getFeedbacksObservable(): Observable<Object> {
    return this.http.get<Feedback[]>(this.feedbackURL)
  }

  getAllFeedbacksSolved(): Observable<Object> {
    return this.http.get<Feedback[]>(this.feedbackURL + "/solved")
  }

  

  updateStatus(id: String) : Observable<Object> {
    return this.http.post<Object>(this.feedbackURL + "/" + id, {});
  }
}

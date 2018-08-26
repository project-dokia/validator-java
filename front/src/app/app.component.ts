import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPStatus } from '../service/interceptor.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  count = 1;
  HTTPActivity: boolean;

  constructor(private httpStatus: HTTPStatus, private _router: Router) {
    this.httpStatus.getHttpStatus()
      .subscribe((status: boolean) => {
        this.HTTPActivity = status;
        if (status) this.count++;
        else this.count--;
      });
  }

  ngOnInit() {

  }

  currentUrl() {

    console.log(this._router.url);
  }
}

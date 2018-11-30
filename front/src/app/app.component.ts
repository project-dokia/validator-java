import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPStatus } from '../service/interceptor.module';
import { SyncService } from '../service/sync.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SyncService]
})
export class AppComponent {
  title = 'app';
  count = 1;
  HTTPActivity: boolean;
  lastSync:String;

  constructor(
    private syncService: SyncService,
    private httpStatus: HTTPStatus, 
    private _router: Router) {
    this.httpStatus.getHttpStatus()
      .subscribe((status: boolean) => {
        this.HTTPActivity = status;
        if (status) this.count++;
        else this.count--;
      });
  }

  ngOnInit() {
    this.getLastSyncObservable();
  }

  public sync() {
    this.syncService.syncObservable()
    .subscribe(res => {
      alert("Syncronized!");
      this.getLastSyncObservable();
    }, err => {
      console.log(err);
    })
  }

  public getLastSyncObservable() {
    this.syncService.getLastSyncObservable()
    .subscribe(res => {
      let response : any;
      response = res;

      if(response.lastSync != undefined && response.lastSync != null && response.lastSync != "null") {
        this.lastSync = response.lastSync;
      } else {
        this.lastSync = "SINCRONIZAR - URGENTE";
      }
      
    }, err => {
      console.log(err);
    })
  }

  currentUrl() {

    console.log(this._router.url);
  }
}

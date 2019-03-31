import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TypeComponent } from './type/type.component';
import { FieldComponent } from './field/field.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { RuleComponent } from './rule/rule.component';
import { ValidatorComponent } from './validator/validator.component';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './model/model.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModalModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpsRequestInterceptor, HTTPStatus } from '../service/interceptor.module';
import { FeedbackComponent } from './feedback/feedback.component';
import { HistoryComponent } from './history/history.component';
import { AdminComponent } from './admin/admin.component';
import { TypeAccessComponent } from './admin/type-access/type-access.component';
import { AddTypeAccessComponent } from './admin/type-access/add/add-type-access.component';
import { ClientComponent } from './admin/client/client.component';
import { AddClientComponent } from './admin/client/add/add-client.component';

const RxJS_Services = [HttpsRequestInterceptor, HTTPStatus];

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    FieldComponent,
    RuleComponent,
    FeedbackComponent,
    HistoryComponent,
    ValidatorComponent,
    ModelComponent,
    AdminComponent,
    TypeAccessComponent,
    AddTypeAccessComponent,
    ClientComponent,
    AddClientComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    NgbModalModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [RxJS_Services
    , {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpsRequestInterceptor,
        multi: true
    },],
  bootstrap: [AppComponent]
})
export class AppModule { }

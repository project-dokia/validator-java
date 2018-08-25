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
import { NgbModalModule, NgbModal, NgbModule } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    FieldComponent,
    RuleComponent,
    ValidatorComponent,
    ModelComponent,
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

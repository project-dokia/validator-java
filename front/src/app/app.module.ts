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

@NgModule({
  declarations: [
    AppComponent,
    TypeComponent,
    FieldComponent,
    RuleComponent,
    ValidatorComponent,
    ModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

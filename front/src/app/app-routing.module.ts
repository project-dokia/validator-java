import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { FieldComponent } from './field/field.component';
import { AppComponent } from './app.component';
import { RuleComponent } from './rule/rule.component';
import { ValidatorComponent } from './validator/validator.component';
import { ModelComponent } from './model/model.component';


const routes: Routes = [
  { path: 'type', component: TypeComponent },
  { path: 'field', component: FieldComponent },
  { path: 'rule', component: RuleComponent },
  { path: 'model', component: ModelComponent },
  { path: 'validator', component: ValidatorComponent },
  { path: '', component: ValidatorComponent }
];

@NgModule({
  exports: [RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

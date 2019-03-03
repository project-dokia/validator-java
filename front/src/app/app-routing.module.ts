import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeComponent } from './type/type.component';
import { FieldComponent } from './field/field.component';
import { AppComponent } from './app.component';
import { RuleComponent } from './rule/rule.component';
import { ValidatorComponent } from './validator/validator.component';
import { ModelComponent } from './model/model.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HistoryComponent } from './history/history.component';
import { AdminComponent } from './admin/admin.component';
import { TypeAccessComponent } from './admin/type-access/type-access.component';
import { AddTypeAccessComponent } from './admin/type-access/add/add-type-access.component';


const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin/type-access', component: TypeAccessComponent },
  { path: 'admin/type-access/add', component: AddTypeAccessComponent },
  { path: 'admin/type-access/edit', component: AddTypeAccessComponent },
  { path: 'type', component: TypeComponent },
  { path: 'field', component: FieldComponent },
  { path: 'rule', component: RuleComponent },
  { path: 'model', component: ModelComponent },
  { path: 'validator', component: ValidatorComponent },
  { path: 'tickets', component: FeedbackComponent },
  { path: 'tickets/history', component: HistoryComponent },
  { path: '', component: ValidatorComponent }
];

@NgModule({
  exports: [RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}

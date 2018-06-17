import { Component, OnInit } from '@angular/core';
import { RuleService } from '../../service/rule.service';
import { Rule } from '../../model/rule';
import { Field } from '../../model/field';
import { FieldService } from '../../service/field.service';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css'],
  providers : [RuleService, FieldService]
})
export class RuleComponent implements OnInit {

  constructor(
    private ruleService : RuleService,
    private fieldService: FieldService) { }

  rules: Rule[];
  rule: Rule;
  fieldsSelected: any[];
  fields: Field[];
  ngOnInit() {

    this.rule = new Rule();
    this.rule.type = "RULE";
    this.fieldsSelected = new Array<any>();
    this.fieldsSelected.push("");

    this.getAllRules();
    this.getAllFields();
  }

  public addField() {
    this.fieldsSelected.push("");
  }

  public removeField() {
    this.fieldsSelected.pop();
  }

  private getAllRules() {
    this.ruleService.getRulesObservable().
    subscribe((res: Array<Rule>) => {
      this.rules = new Array<Rule>();
      this.rules = res;
    });
  }

  private getAllFields() {
    this.fieldService.getFieldsObservable().
    subscribe((res: Array<Field>) => {
      this.fields = new Array<Field>();
      this.fields = res;
    });
  }

  public insertRule() {   
    let fieldsInsert = new Array<Field>();
    for(let fieldSel of this.fieldsSelected) {
      for(let field of this.fields) {
        if(field._id == fieldSel) {
          fieldsInsert.push(field);
        }
      }
    }

    this.rule.fields = fieldsInsert;

    this.ruleService.insertRuleObservable(this.rule).subscribe((res: Object) => {
      alert("Inserido");
      this.getAllRules();

      this.rule = new Rule();
      this.rule.type = "RULE";
      this.fieldsSelected = new Array<any>();
      this.fieldsSelected.push("");
    })
  }
}

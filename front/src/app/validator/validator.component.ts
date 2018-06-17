import { Component, OnInit } from '@angular/core';
// import { ValidatorService } from '../../service/validator.service';
import { Input } from '../../model/input';
import { RuleService } from '../../service/rule.service';
import { Rule } from '../../model/rule';
import { Model } from '../../model/model';
import { Field } from '../../model/field';
import { FieldService } from '../../service/field.service';
import { TypeService } from '../../service/type.service';
import { Type } from '../../model/type';
import { ModelService } from '../../service/model.service';
import { Document } from '../../model/document';
import { ValidatorService } from '../../service/validator.service';
import { Result } from '../../model/result';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css'],
  providers: [RuleService]
})
export class ValidatorComponent implements OnInit {

  constructor(
    // private validatorService : ValidatorService,
    private ruleService: RuleService,
    private fieldService: FieldService,
    private typeService: TypeService,
    private modelService: ModelService,
    private validatorService: ValidatorService,
  ) { }

  validators: Input[];
  rules: Rule[];
  models: Model[];
  fields: Field[];
  types: Type[];

  rule: Rule;
  ngOnInit() {
    this.rule = new Rule();
    this.getAllRules();



  }


  public addValidator(index) {
    let count = 0;
    for (const rule of this.rules) {
      if (count == index) {
        this.rule = rule;
      }
      count++;
    }

    this.models = new Array<Model>();
    this.fields = new Array<Field>();
    this.types = new Array<Type>();

    this.getAllModels();
    this.getAllTypes();
    this.getAllFields();

  }

  private getAllModels() {
    if (this.models.length == 0) {
      this.modelService.getModelsObservable().
        subscribe((res: Array<Model>) => {
          this.models = new Array<Model>();
          this.models = res;

          this.setModels();
        });
    } else {
      this.setModels();
    }
  }

  private getAllTypes() {
    if (this.types.length == 0) {
      this.typeService.getTypesObservable().
        subscribe((res: Array<Type>) => {
          this.types = new Array<Type>();
          this.types = res;

          this.setTypes();
        });
    } else {
      this.setTypes();
    }
  }

  private setModels() {
    for (let field of this.rule.fields) {
      for (let model of this.models) {
        if (model._id == field.idModel) {
          field.titleModel = model.description;
        }
        
      }
    }

    for (let fieldTop of this.rule.fields) {
      for (let field of this.rule.fields) {
        if(field.otherId == fieldTop._id) {
          for (let model of this.models) {
            if (model._id == fieldTop.idModel) {
              field.titleModelId = model.description;
            }
          }
        }
      }
    }
  }

  private setTypes() {
    let count = 0;
    for (let field of this.rule.fields) {
      for (let type of this.types) {
        if (type._id == field.idType) {
          this.rule.fields[count].titleType = type.description;
        }
      }
      count++;
    }
  }

  private setFields() {
    for (let field of this.rule.fields) {
      for (let otherField of this.fields) {
        if (otherField._id == field.otherId) {
          field.titleId = otherField.title;
        }
      }
    }
  }

  private getAllFields() {
    if (this.fields.length == 0) {
      this.fieldService.getFieldsObservable().
        subscribe((res: Array<Field>) => {
          this.fields = new Array<Field>();
          this.fields = res;

          this.setFields();
        });
    } else {
      this.setFields();
    }
  }

  public validator() {
    let inputs = new Array<Input>();
    for (const field of this.rule.fields) {
      let input = new Input();
      input.idField = field._id;
      input.value = field.value;

      inputs.push(input);
    }

    let document = new Document();
    document.inputs = inputs;
    document.idRule = this.rule._id;

    this.validatorService.insertValidatorObservable(document).subscribe((res: Array<Result>) => {
      let result = Array<Result>();
      result = res;

      console.log(result);

      let count = 0;
      for(let rst of result) {
        this.rule.fields[count].result = String(rst.result);
        count ++;
      }
    })
  }

  private getAllRules() {
    this.ruleService.getRulesObservable().
      subscribe((res: Array<Rule>) => {
        this.rules = new Array<Rule>();
        this.rules = res;
      });
  }

}

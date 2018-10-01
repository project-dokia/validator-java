import { Component, OnInit } from '@angular/core';
import { RuleService } from '../../service/rule.service';
import { Rule } from '../../model/rule';
import { Field } from '../../model/field';
import { FieldService } from '../../service/field.service';
import { TypeService } from '../../service/type.service';
import { ModelService } from '../../service/model.service';
import { NgbModal } from '../../../node_modules/@ng-bootstrap/ng-bootstrap';
import { Model } from '../../model/model';
import { Type } from '../../model/type';
import { FieldRule } from '../../model/field-rule';

@Component({
  selector: 'app-rule',
  templateUrl: './rule.component.html',
  styleUrls: ['./rule.component.css'],
  providers: [RuleService, FieldService]
})
export class RuleComponent implements OnInit {

  constructor(
    private ruleService: RuleService,
    private fieldService: FieldService,
    private typeService: TypeService,
    private modelService: ModelService,
    private modalService: NgbModal,
  ) { }

  fieldsNenhum: Field[];
  fieldsSelected: Field[];

  types: Type[];
  models: Model[];

  field: Field;
  fieldEdit: Field;

  rules: Rule[];
  rule: Rule;
  ruleTitle: string;
  fields: Field[];

  fieldsRuleView: Field[];
  fieldsSelectedForm: any[];
  fieldsSelectedFormOthers: any[];
  fieldsRuleViewNenhum: any[];
  fieldAddrule: string;
  fieldAddruleOtherId: string;

  _id: string;
  ngOnInit() {

    this.rule = new Rule();
    this.rule.type = "RULE";
    this.fieldsSelected = new Array<any>();
    this.fieldsSelected.push(new Field());

    this.fieldsSelectedForm = new Array<any>();
    this.fieldsSelectedForm.push("");

    this.fieldsSelectedFormOthers = new Array<any>();
    this.fieldsSelectedFormOthers.push("");

    this.getAllRules();
    this.getAllFields();
  }

  public changeField(index: string) {
    var contains: boolean = false;
    for (let field of this.fields) {
      if (field._id == this.fieldsSelectedForm[parseInt(index)]) {
        if (field.needOtherId == true) {
          for (let fieldOtherId of this.fields) {
            if (field.otherId == fieldOtherId._id) {
              if (fieldOtherId.titleType == "Nenhum") {
                this.fieldsSelectedFormOthers[parseInt(index)] = fieldOtherId.title;
                contains = true;
              }
            }
          }
        }
      }
    }

    if (contains == false) {
      this.fieldsSelectedFormOthers[parseInt(index)] = "";
    }
  }

  public changeFieldAddRule(index: string) {
    var contains: boolean = false;
    for (let field of this.fields) {
      if (field._id == this.fieldAddrule) {
        if (field.needOtherId == true) {
          for (let fieldOtherId of this.fields) {
            if (field.otherId == fieldOtherId._id) {
              if (fieldOtherId.titleType == "Nenhum") {
                this.fieldAddruleOtherId = String(fieldOtherId.title);
                contains = true;
              }
            }
          }
        }
      }
    }

    if (contains == false) {
      this.fieldAddruleOtherId = "";
    }
  }

  public addField() {
    this.fieldsSelectedForm.push(new Field());
    this.fieldsSelectedFormOthers.push("");
  }

  public insertFieldFromRule() {
    let fieldRule = new FieldRule();
    fieldRule.idField = this.fieldAddrule;
    fieldRule._id = this._id;

    this.ruleService.addFieldFromRule(fieldRule)
      .subscribe(res => {
        let contains = false;
        for (let field of this.fields) {
          if (field.title == this.fieldAddruleOtherId) {
            contains = true;
            fieldRule.idField = String(field._id);
            fieldRule._id = this._id;

            this.ruleService.addFieldFromRule(fieldRule)
              .subscribe(res => {
                alert("Inserido com sucesso");
                this.view(this._id, "");

                let close = document.getElementById("close");
                close.click();
              }, err => {
                console.log(err);
              })
            break;
          }
        }

        if (contains == false) {
          alert("Inserido com sucesso");
          this.view(this._id, "");

          let close = document.getElementById("close");
          close.click();
        }
      }, err => {
        console.log(err);
      });




  }

  public removeFieldFromRule(idField: string) {
    let fieldRule = new FieldRule();
    fieldRule.idField = idField;
    fieldRule._id = this._id;

    this.ruleService.removeFieldFromRule(fieldRule)
      .subscribe(res => {
        alert("Removido com sucesso");
        this.view(this._id, "");
      }, err => {
        console.log(err);
      })
  }

  public removeField() {
    this.fieldsSelectedForm.pop();
    this.fieldsSelectedFormOthers.pop();
  }

  private getAllRules() {
    this.ruleService.getRulesObservable().
      subscribe((res: Array<Rule>) => {
        this.rules = new Array<Rule>();
        this.rules = res;
      });
  }

  private getAllFields() {
    this.field = new Field();
    this.models = new Array<Model>();
    this.fields = new Array<Field>();
    this.types = new Array<Type>();

    this.field.type = "FIELD";

    if (this.fields.length == 0) {
      this.fieldService.getFieldsObservable().
        subscribe((res: Array<Field>) => {
          this.fields = new Array<Field>();
          this.fields = res;


          this.getAllTypes();
        });
    } else {
      this.setFields();
    }
  }

  private getAllTypes() {
    if (this.types.length == 0) {
      this.typeService.getTypesObservable().
        subscribe((res: Array<Type>) => {
          this.types = new Array<Type>();
          this.types = res;

          this.setFields();
        });
    } else {
      this.setTypes();
    }
  }

  private setFields() {
    for (let field of this.fields) {
      for (let otherField of this.fields) {
        if (otherField._id == field.otherId) {
          field.titleId = otherField.title;
        }
      }
    }

    this.getAllModels();

  }

  private setTypes() {
    let count = 0;
    for (let field of this.fields) {
      for (let type of this.types) {
        if (type._id == field.idType) {
          this.fields[count].titleType = type.description;
        }
      }
      count++;
    }

    this.fieldsNenhum = new Array<Field>();
    this.fieldsSelected = new Array<Field>();

    for (let field of this.fields) {
      if (field.titleType == "Nenhum") {
        this.fieldsNenhum.push(field);
      } else {
        this.fieldsSelected.push(field);
      }
    }

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

  private setModels() {
    for (let field of this.fields) {
      for (let model of this.models) {
        if (model._id == field.idModel) {
          field.titleModel = model.description;
        }
      }
    }

    for (let fieldTop of this.fields) {
      for (let field of this.fields) {
        if (field.otherId == fieldTop._id) {
          for (let model of this.models) {
            if (model._id == fieldTop.idModel) {
              field.titleModelId = model.description;
            }
          }
        }
      }
    }


    this.setTypes();
  }

  public removeRule() {

  }


  public view(_id: string, rule: string) {
    if (_id != undefined) {
      this.ruleService.getRuleByIdObservable(_id)
        .subscribe(res => {
          this._id = _id;
          if (rule != "") {
            this.ruleTitle = rule;
          }

          var fields = res.fields;

          this.fieldsRuleView = new Array<Field>();

          for (let field of fields) {
            for (let fieldSelected of this.fieldsSelected) {
              if (field._id == fieldSelected._id) {
                this.fieldsRuleView.push(fieldSelected);
              }
            }
          }

          this.fieldsRuleViewNenhum = new Array<Field>();

          for (let field of fields) {
            for (let fieldSelected of this.fieldsNenhum) {
              if (field._id == fieldSelected._id) {
                this.fieldsRuleViewNenhum.push(fieldSelected);
              }
            }
          }



        }, err => {
          console.log(err);
        });
    }
  }

  public insertField(content) {
    this.modalService.open(content, { centered: true, size: 'lg' });
  }


  public insertRule() {
    let fieldsInsert = new Array<Field>();
    for (let fieldSel of this.fieldsSelectedForm) {
      for (let field of this.fields) {
        if (field._id == String(fieldSel)) {
          fieldsInsert.push(field);
          if (field.needOtherId == true) {
            for (let fieldOtherId of this.fields) {
              if (field.otherId == fieldOtherId._id) {
                if (fieldOtherId.titleType == "Nenhum") {
                  fieldsInsert.push(fieldOtherId);
                }
              }
            }
          }
        }
      }
    }



    this.rule.fields = fieldsInsert;

    this.ruleService.insertRuleObservable(this.rule).subscribe((res: Object) => {
      alert("Inserido");
      this.getAllRules();

      this.rule = new Rule();
      this.rule.type = "RULE";
      this.fieldsSelectedForm = new Array<any>();
      this.fieldsSelectedForm.push(new Field());
    })
  }
}

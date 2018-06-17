import { Component, OnInit } from '@angular/core';
import { FieldService } from '../../service/field.service';
import { Field } from '../../model/field';
import { Type } from '../../model/type';
import { TypeService } from '../../service/type.service';
import { Model } from '../../model/model';
import { ModelService } from '../../service/model.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
  providers: [FieldService, ModelService, TypeService]
})
export class FieldComponent implements OnInit {

  constructor(
    private fieldService: FieldService,
    private typeService: TypeService,
    private modelService: ModelService,
  ) { }

  fields: Field[];
  types: Type[];
  models: Model[];

  field: Field;
  ngOnInit() {

    this.field = new Field();
    this.field.type = "FIELD";

    this.models = new Array<Model>();
    this.fields = new Array<Field>();
    this.types = new Array<Type>();

    this.getAllFields();
    this.getAllTypes();
    this.getAllModels();
  }

  // private getAllFields() {
  //   this.fieldService.getFieldsObservable().
  //   subscribe((res: Array<Field>) => {
  //     this.fields = new Array<Field>();
  //     this.fields = res;
  //   });
  // }

  // private getAllTypes() {
  //   this.typeService.getTypesObservable().
  //   subscribe((res: Array<Type>) => {
  //     this.types = new Array<Type>();
  //     this.types = res;
  //   });
  // }

  // private getAllModels() {
  //   this.modelService.getModelsObservable().
  //   subscribe((res: Array<Model>) => {
  //     this.models = new Array<Model>();
  //     this.models = res;
  //   });
  // }

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

  public verify(otherId) {
    if(String(otherId) == 'true') {
      return true;
    } else {
      return false;
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
  }

  private setFields() {
    for (let field of this.fields) {
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

  public insertField() {
    this.fieldService.insertFieldObservable(this.field).subscribe((res: Object) => {
      alert("Inserido");
      this.getAllFields();

      this.field = new Field();
      this.field.type = "FIELD";
    })
  }
}

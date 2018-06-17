import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../service/model.service';
import { Model } from '../../model/model';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  providers : [ModelService]
})
export class ModelComponent implements OnInit {

  constructor(private modelService : ModelService) { }

  models: Model[];
  model: Model;
  ngOnInit() {

    this.model = new Model();

    this.getAllModels();
  }

  private getAllModels() {
    this.modelService.getModelsObservable().
    subscribe((res: Array<Model>) => {
      this.models = new Array<Model>();
      this.models = res;
    });
  }

  public insertModel() {
    this.modelService.insertModelObservable(this.model).subscribe((res: Object) => {
      alert("Inserido");
      this.getAllModels();
    })
  }
}

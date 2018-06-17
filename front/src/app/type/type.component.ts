import { Component, OnInit } from '@angular/core';
import { TypeService } from '../../service/type.service';
import { Type } from '../../model/type';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
  providers : [TypeService]
})
export class TypeComponent implements OnInit {

  constructor(private typeService : TypeService) { }

  types: Type[];
  type: Type;
  ngOnInit() {

    this.type = new Type();

    this.getAllTypes();
  }

  private getAllTypes() {
    this.typeService.getTypesObservable().
    subscribe((res: Array<Type>) => {
      this.types = new Array<Type>();
      this.types = res;
    });
  }

  public insertType() {
    this.typeService.insertTypeObservable(this.type).subscribe((res: Object) => {
      alert("Inserido");
      this.getAllTypes();
    });
  }
}

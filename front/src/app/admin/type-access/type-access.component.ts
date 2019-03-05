import { Component, OnInit } from '@angular/core';
import { TypeAccessService } from 'src/service/type-access.service';
import { TypeAccess } from 'src/model/type-access';

@Component({
  selector: 'app-model',
  templateUrl: './type-access.component.html',
  styleUrls: ['./type-access.component.css'],
  providers: [TypeAccessService]
})
export class TypeAccessComponent implements OnInit {

  typesAccess:TypeAccess[];

  constructor(
    public typeAccessProvider: TypeAccessService,
  ) { }

  ngOnInit() {
    this.getAllTypesAccess();
  }

  public getAllTypesAccess() {
    this.typeAccessProvider.getAll()
    .subscribe(res =>{
      this.typesAccess = res;
      console.log(res);
    }, err=> {
      console.log(err);
    })
  }

}

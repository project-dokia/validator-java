import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/model/permission';
import { TypeAccessService } from 'src/service/type-access.service';
import { TypeAccess } from 'src/model/type-access';

@Component({
  selector: 'app-model',
  templateUrl: './add-type-access.component.html',
  styleUrls: ['./add-type-access.component.css'],
  providers: [TypeAccessService]
})
export class AddTypeAccessComponent implements OnInit {

  permissions: Array<Permission>;
  typeAccess:TypeAccess;

  constructor(
    public typeAccessProvider: TypeAccessService
  ) { }

  ngOnInit(

  ) {
    this.typeAccess = new TypeAccess();
    this.getAllPermissions();
  }

  public getAllPermissions() {
    this.typeAccessProvider.getAllPermissions()
      .subscribe(res => {
        this.permissions = res;
      }, err => {
        console.log(err);
      })
  }

  public insertTypeAccess() {
    this.typeAccess.permissions = this.permissions;

    this.typeAccessProvider.insertTypeAccess(this.typeAccess)
    .subscribe(res=> {
      console.log(res);
    }, err=> {
      console.log(err);
    })
  }

}

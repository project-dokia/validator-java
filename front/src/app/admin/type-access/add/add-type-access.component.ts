import { Component, OnInit } from '@angular/core';
import { Permission } from 'src/model/permission';
import { TypeAccessService } from 'src/service/type-access.service';

@Component({
  selector: 'app-model',
  templateUrl: './add-type-access.component.html',
  styleUrls: ['./add-type-access.component.css'],
  providers: [TypeAccessService]
})
export class AddTypeAccessComponent implements OnInit {

  permissions: Array<Permission>;

  constructor(
    public typeAccessProvider: TypeAccessService
  ) { }

  ngOnInit(

  ) {

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

}

import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/service/client.service';
import { Client } from 'src/model/client';

@Component({
  selector: 'app-model',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {

  clients: Client[];

  constructor(
    public clientProvider: ClientService
  ) { }

  ngOnInit() {
    this.getAllClients();
  }


  public getAllClients() {
    this.clientProvider.getAll()
    .subscribe(res =>{
      this.clients = res;
      console.log(res);
    }, err=> {
      console.log(err);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import { Client } from 'src/model/client';
import { ClientService } from 'src/service/client.service';

@Component({
  selector: 'app-model',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
  providers: [ClientService]
})
export class AddClientComponent implements OnInit {

  client:Client;

  constructor(
    public clientService: ClientService
  ) { }

  ngOnInit() {
    this.client = new Client();
  }

  public addClient() {
    this.clientService.insertClient(this.client)
    .subscribe(res=> {
      console.log(res);
      window.location.href = "/";
    }, err => {
      console.log(err);
    })
  }

}

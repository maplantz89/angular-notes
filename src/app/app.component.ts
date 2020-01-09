import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // Account Example - Dependency Injections (data management)
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }

}
/**
 * 


  // Game Assignment
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];
  onTimerFired(num: number){
    if(num % 2 === 0){
      this.evenNumbers.push(num);
    }
    else{
      this.oddNumbers.push(num);
    }
  }

  // Go with Server and Cockpit components
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'this is a test' }
  ];

  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })
  }
  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    })
  }

  onChangeFirstElement() {
    this.serverElements[0].name = "Changed";
  }
  onDestroyFirstElement() {
    this.serverElements.splice(0, 1);
  }
}*/

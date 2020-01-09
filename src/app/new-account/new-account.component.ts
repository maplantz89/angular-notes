import { Component, OnInit } from '@angular/core';

import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // if you bring in the service you are creating and new instance if you want to use the 
  // same instance as a parent then you do not list the service in the providers array 
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountService: AccountService){
    this.accountService.statusUpdated.subscribe(
      (status: string) => alert('New Status ' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // dependency injections (with provider statement above)
    this.accountService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }

  ngOnInit() {
  }

}

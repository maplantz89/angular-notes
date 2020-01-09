import { Component, OnInit, Input } from '@angular/core';

import { LoggingService } from '../services/logging.service';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountService) { }

  onSetTo(status: string) {
    // dependency injection (with provider above)
    this.accountService.updateAccount(this.id, status);
    // this.loggingService.logStatusChange(status);

    // if you want to emit the status you can still use a service
    this.accountService.statusUpdated.emit(status);
  }

  ngOnInit() {
  }

}

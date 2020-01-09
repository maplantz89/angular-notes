import { Injectable, EventEmitter } from '@angular/core';

import { LoggingService } from './logging.service';

// need in order to inject into a service
@Injectable()

export class AccountService {
  accounts = [
    {
      name: 'Master',
      status: 'active'
    },
    {
      name: 'Test',
      status: 'inactive'
    },
    {
      name: 'Hidden',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService){}

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  updateAccount(id: number, newStatus: string){
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChange(newStatus);
  }
}
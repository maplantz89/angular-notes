import { Component, OnInit } from '@angular/core';

@Component({
  //selector can be an attribute like this '[app-my-comp]' or class '.app-my-comp'
  //then inorder to use you add as an attribute of a html element
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  // can do inline template and style here instead...
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  myName: string = 'Martha';
  name = 'Aaron';
  named: string = 'Aaron';
  array = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];

  //assignment 1
  src: number = 7;
  getAppStatus(){
    return this.src;
  }
  allowNewApp = false; 

  //assignment 2
  username: string = '';

  //assignment 3
  viewDetails = false;
  clicks = [];

  //assignment 1
  //button will be disabled for two seconds then switch to true
  constructor() { 
    setTimeout(() => {
      this.allowNewApp = true;
    }, 2000)
  }

  ngOnInit() { }

  //assignemnt 2
  onClearUsername(event){
    this.username = event.target.value = ''; 
  }

  //assignment 3
  onToggleDetails(){
    this.viewDetails = !this.viewDetails;
    this.clicks.push(this.clicks.length + 1);
  }
  getTextColor(click){
    click > 4 ? 'white' : '';
  }

  //playground - adds classes to 1 and 2 in the list
  decideClass(int: number) {
    switch (int) {
      case 1:
        return 'bananas'
      case 2:
        return 'chicken'
    }
  }
}

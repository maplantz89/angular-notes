import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  myName: string = 'Martha';
  name = 'Aaron';
  src: number = 7;
  allowNewApp = false; 
  appCreationStatus = 'No app was created';
  appName = "SendIt";
  appCreated = false;
  catAge = 'kitten';
  apps = ['TestApp', 'CoolApp'];
  
  getAppStatus(){
    return this.src;
  }

  //button will be disabled for two seconds then switch to true
  constructor() { 
    setTimeout(() => {
      this.allowNewApp = true;
    }, 2000);

    this.catAge = Math.random() > 0.5 ? 'cat' : 'kitten';

  }

  ngOnInit() {
  }

  //method called during event binding on click of button
  //able to bring in the two-way bound data and display dynamically 
  onCreateApp(){
    this.appCreated = true;
    this.appCreationStatus = "App was created! Name is " + this.appName;
    this.apps.push(this.appName)
  }

  // how to type an event
  onUpdateAppName(event: Event){
    // need to add this HTMLInputElement to type it for typescript
    this.appName = (<HTMLInputElement>event.target).value;
  }

  //updating the style based on the property binding
  getColor(){
    return this.catAge === 'kitten' ? 'pink' : 'yellow';
  }

}

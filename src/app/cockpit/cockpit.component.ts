import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // @Output decorator is how to pass date from a child to a parent component
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName: string = ''; no longer needed because we are using a local reference for this data in the template
  
  newServerContent: string = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput) //entire html element 
    console.log(nameInput.value) //gives you the value of the input
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent})
  }

  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent})
  }
}

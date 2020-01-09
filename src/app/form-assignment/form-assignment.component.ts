import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent implements OnInit {
  defaultSub = 'advanced';
  
  constructor() { }
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
  }
}

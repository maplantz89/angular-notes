import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-assignment2',
  templateUrl: './form-assignment2.component.html',
  styleUrls: ['./form-assignment2.component.css']
})
export class FormAssignment2Component implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.invalidName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical')
    });
  }

  invalidName(control: FormControl): {[s:string]: boolean}{
    if(control.value === 'Test'){
      return {'nameIsForbidden': true}; 
    }
    return null; 
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset();
  }
}

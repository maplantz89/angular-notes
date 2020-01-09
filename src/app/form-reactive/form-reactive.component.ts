import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  genders = ['female', 'male'];
  signupForm: FormGroup;
  forbiddenUsername = ['Chris', 'Anna'];

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails)
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // updates after each keystroke
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );

    // communciates the status of your form each key stroke
    this.signupForm.statusChanges.subscribe(
      (value) => console.log(value)
    );

    // patchValue works too if you want to update only one value
    this.signupForm.setValue({
      'userData': {
        'username': 'Martha',
        'email': 'email@hello.com'
      },
      'gender': 'female',
      'hobbies': [] 
    })
  }

  onAddHobby(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  getControls(){
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1){
      return {'nameIsForbidden': true};
    }
    return null;
  }

  // adds ng-pending and then either valid or invalid
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsFrobidden': true});
        }
        else{
          resolve(null); 
        }
      }, 1500)
    });
    return promise;
  }

  onSubmit(){
    console.log(this.signupForm.value)
    this.signupForm.reset();
  }
}

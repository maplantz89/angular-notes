import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted= false; 

  // not great solution (will overwrite all values)
  // suggestUserName(){
  //   const suggestedName = 'Superuser';
  //   this.signupForm.setValue({
  //     userData: {
  //       username: suggestedName, 
  //       email: ''
  //     },
  //   secret: 'pet',
  //   questionAnswer: '',
  //   gender: 'female'
  //   });
  // }

  // better b/c it will only update one value!
  suggestUserName(){
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  constructor() { }
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    // has a lot of properties that can be used 
    // console.log(form); 
    this.submitted = true; 
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  // useful if you need to pass values on submit and having access earlier...
  // onSubmit(){
  //   // uses ViewChild
  //   console.log(this.signupForm);
  // }
}

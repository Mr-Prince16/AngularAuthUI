import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type : string = "password";
  isText : boolean = false;
  eyeIcon : string = "fa-eye-slash";
  signupForm!: FormGroup;
    constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fb.group({
      firstName: ['' , Validators.required],
      lastName: ['' , Validators.required],
      email: ['' , Validators.required],
      username: ['' , Validators.required],
      password: ['' , Validators.required]
    })
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon= "fa-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
    }
}

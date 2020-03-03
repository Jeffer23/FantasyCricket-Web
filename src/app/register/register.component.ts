import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      userID: '',
      userName: '',
      password:'',
      retype_password:''
    });
   }

  ngOnInit(): void {
  }

  onSubmit(registrationDetails){
    let isPasswordMatched:Boolean = this.validatePassword(registrationDetails.password, registrationDetails.retype_password);
    if(isPasswordMatched){
      this.userService.registerUser(registrationDetails);
      alert(registrationDetails.userName + " registered successfully.")
    }
    else
      alert("Password Mismatch");
  }

  private validatePassword(password:String, retypePassword: String):Boolean{
    if(password === retypePassword)
      return true;
    else return false;
  }
}

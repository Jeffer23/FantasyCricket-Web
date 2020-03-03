import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  constructor(private formBuilder: FormBuilder) {
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
    let isPaswordMatches:Boolean = this.validatePassword(registrationDetails.password, registrationDetails.retype_password);
  }

  private validatePassword(password:String, retypePassword: String):Boolean{
    if(password === retypePassword)
      return true;
    else return false;
  }
}

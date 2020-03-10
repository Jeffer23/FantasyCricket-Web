import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private snackBar: MatSnackBar) {
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
    }
    else
      this.showSnackBar("Password Mismatch");
  }

  private validatePassword(password:String, retypePassword: String):Boolean{
    if(password === retypePassword)
      return true;
    else return false;
  }

  private showSnackBar(message: string){
    let config = new MatSnackBarConfig();
        config.panelClass = ['snack-bar'];
        config.duration = 3000;
        config.horizontalPosition = "center";
        config.verticalPosition = "top";
        this.snackBar.open(message, null ,config);
  }
}

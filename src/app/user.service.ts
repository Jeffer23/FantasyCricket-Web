import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar/';

import { appConstants, SESSION_ID } from './appConstant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  config = new MatSnackBarConfig();

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {
    this.config.panelClass = ['snack-bar'];
    this.config.duration = 3000;
   }

  public login(loginDetails) {
    console.log(loginDetails);
    let login = appConstants.loginUser;
    this.http.post<String>(login.url, loginDetails).subscribe(response=>{
      console.log(response);
      sessionStorage.setItem(SESSION_ID.UserDetailsKey, String(response));
      window.location.href = "/buildTeam";
    }, error=>{
      this.handleError(error);
    });
  }

  public registerUser(user){
    console.info(user);
    //this.http.get("http://localhost:8080/FantasyCricket/user").subscribe(response=>console.log("Response" + response));
    let registration = appConstants.registerUser;
    
    this.http.post<String>(registration.url, user).subscribe(response=>{
     
      if(response) {
        this.snackBar.open(user.userName + " registered Successfully", "login", this.config);
        
        setTimeout(function () {
            window.location.href = "/";
        }, 3000);
      }
      else
        this.snackBar.open("Registration Failed. Contact admin", null , this.config);
    });
   
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      this.snackBar.open(error.error.message, null , this.config);
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      this.snackBar.open(`Staus :  + ${error.status}`, `${error.error}` , this.config);
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    //return throwError(
      //'Something bad happened; please try again later.');
  };
}

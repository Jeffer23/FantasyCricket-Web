import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { appConstants } from './appConstant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor(private http: HttpClient) { }

  

  public registerUser(user): Observable<Object>{
    console.info(user);
    //this.http.get("http://localhost:8080/FantasyCricket/user").subscribe(response=>console.log("Response" + response));
    let registration = appConstants.registerUser;
    this.http.post(registration.url, user).subscribe(response=>console.log(response));
    return this.http.post(registration.url, user);
  }
}

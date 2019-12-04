import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig} from './app.config'
import{Observable} from 'rxjs'
import { BPClient } from 'blocking-proxy';
//import 'rxjs/add/operator/map'


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {


  // private redirectUrl: string = '/';
  // private loginUrl: string = '/login';
  userExist=false;
  loggedInUser;
  userUrl='http://localhost:3000';
  constructor(private http: HttpClient) { }
  
  

  
//   login(username: string, password: string) {
//     return this.http.post<any>(appConfig.apiUrl + '/users/authenticate', { username: username, password: password })
//         .map(user => {
//             // login successful if there's a jwt token in the response
//             if (user && user.token) {
//                 // store user details and jwt token in local storage to keep user logged in between page refreshes
//                 localStorage.setItem('currentUser', JSON.stringify(user));
//             }

//             return user;
//         });
// }

// logout() {
//     // remove user from local storage to log user out
//     localStorage.removeItem('currentUser');
// }


login(username: string, password: string) {

  debugger;

  return this.http.post<any>(this.userUrl + '/login', { "username": username, "password": password});

}

isloggedIn(value) {
  
  this.userExist= value;
}


isUserLoggedIn(): boolean{
  return this.userExist;

}

getLoggedInUser(username: string) {
  debugger;
  this.loggedInUser= username;

}
sendLoggedInUser(){
  return this.loggedInUser;

}

// getRedirectUrl(): string {
//  debugger;
//   return this.redirectUrl;
// }

// setRedirectUrl(url: string): void {
//   debugger;

//   this.redirectUrl = url;
// }
// getLoginUrl(): string {
//   debugger;
//   return this.loginUrl;
// }




}

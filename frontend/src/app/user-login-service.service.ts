import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {

  isLoggedIn(): boolean{
    return false;
  }

  constructor() { }
}

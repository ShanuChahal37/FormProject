import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot, CanDeactivate, CanActivateChild} from '@angular/router';
import { UserLoginServiceService } from './user-login-service.service';
import { AuthenticationServiceService } from './authentication-service.service';
import { UserServiceService } from './user-service.service';
import { RegisterComponent } from './register/register.component';
// import { Observable} from 'rxjs/observable';

//import { LoginComponent } from './login/login.component';




@Injectable({
  providedIn: 'root'
})


export class RouteGaurdService implements CanActivate, CanActivateChild ,CanDeactivate<RegisterComponent> {

  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): boolean{
 
  console.log("AlwaysAuthGuard");
//  let url: string = state.url;


  
  if(this.authenticationService.isUserLoggedIn()){
  
    //  this.router.navigateByUrl('/login/form');
    return true;
  }
    else{
    window.alert("you dont have permission to view this page");
    this.router.navigate(['/login']);
    return false;
  }

}

canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
let loggedInUser = this.authenticationService.sendLoggedInUser();
debugger;
if(loggedInUser === 'admin'){
  return true
}
else{
  window.alert('unauthorized to open link:' + state.url);
  return false;
}
}


canDeactivate(component: RegisterComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean {
                 
    console.log("UnsearchedTermGuard");
    console.log(route.params);
    console.log(state.url);
    
    return component.canDeactivate() || window.confirm("Are you sure?");
  }

// canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
 
//   // let url: string = state.url;
//   // console.log('Url:'+ url);
 

//   if (this.loginComponent.isUserLoggedIn()) {
//     this.router.navigate(['/login/form']);  
//     return true;
//   }
// // debugger;
// //   this.authenticationService.setRedirectUrl(url);
// //   debugger;

// //   this.router.navigate([this.authenticationService.getLoginUrl()]);
// else{

//   window.alert("not allow");

//   return false;
// }
// }

  constructor(private userLoginService: UserLoginServiceService,
    private authenticationService: AuthenticationServiceService,
    private router: Router,
    private userService: UserServiceService,
    
    //private loginComponent: LoginComponent
    ) { }
}

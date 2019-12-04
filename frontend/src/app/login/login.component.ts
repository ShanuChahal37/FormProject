import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationServiceService } from '../authentication-service.service';
//import {  RouteGaurdService} from '../route-gaurd.service'
import { format, debug } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  hide=true;
  //u=JSON.parse(localStorage.getItem('reg'));

  userExist= false;
  loggedInUser;

  model: any={};
  loading= false;
  returnUrl: string;

  fGroup= this.fb.group({
     'userName' : ['', Validators.required],
    'password' : ['',Validators.required]

    });
  

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private authenticationService: AuthenticationServiceService
  ) { }

  ngOnInit() {

    // this.authenticationService.logout();
    this.returnUrl=this.route.snapshot.queryParams['returnUrl']|| '/';
  }

  validateName() {
        return this.fGroup.get('userName').hasError('required') ? 'Field is required' :
           '';
      }

    validatePass(){
      return this.fGroup.get('password').hasError('required')?'Field is required': '';
    }


  // onSubmit(){
  //   if(this.fGroup.valid){
    
  //   alert("login click");
  //   console.warn(this.fGroup.get('userName').value);

  //   if(this.u != null && this.fGroup.get('userName').value != (this.u.userName) ){
  //     alert('User Not Found!!!!! Register first!!!');
  //    } 
     
  //   else if(this.fGroup.get('userName').value == (this.u.userName) &&this.fGroup.get('password').value === (this.u.password))
  //   {
  //     localStorage.setItem('data', JSON.stringify(this.fGroup.value ));
  //     this.fGroup.reset;
  //   this.router.navigateByUrl('/form');
  //  }
  //  else {
  //    alert('Wrong Username and password');
  //  }
   
  // }

  // }
  
  register(){
   

    alert("register click");
    this.router.navigateByUrl('/register');

  
  }

  onSubmit(){

    debugger;
    
    this.authenticationService.login(this.fGroup.get('userName').value,this.fGroup.get('password').value)
        .subscribe(
            data => {
              
              this.userExist= true;
              
              debugger;
              this.authenticationService.isloggedIn(this.userExist);
              // alert("success");
              this.router.navigate(['/login/form']);


              

               

           //    this.router.navigate(['/login/form']);
            },
            error => {
              this.userExist=false;
              
              this.authenticationService.isloggedIn(this.userExist);

              alert("wrong username and password");
             
            
          });

          }



        onClick(){

          
    this.authenticationService.login(this.fGroup.get('userName').value,this.fGroup.get('password').value)
    .subscribe(
        data => {
          debugger;
          this.loggedInUser = this.fGroup.get('userName').value ;
              this.authenticationService.getLoggedInUser(this.loggedInUser);
              this.router.navigate(['/login/dbData']);
            },
            error => {
             
              alert("wrong username and password");
             
          
        });
      }
   //   parentMessage= this.fGroup.get('userName').value ;

        

  }


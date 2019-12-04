import { Component, OnInit,Input } from '@angular/core';
import {FormControl, Validators, FormBuilder, FormGroup} from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

import { AuthenticationServiceService } from '../authentication-service.service';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {
  //  formGroup: FormGroup;
  @Input() childMessage: string;
  success= false;
  loggedInUser: string;
  gender = ['Male', 'Female',
  'Trans'];

  uuu=JSON.parse(localStorage.getItem('data'));
  
  // const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formGroup= this.formBuilder.group({
     'name': [null, [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
    // 'lastName': [null, [Validators.required,Validators.pattern(/^[a-z ,.'-]+$/i)]],
          'phone': [null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],
          'email': [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
          'gender': [null, Validators.required],
          'date': [null, Validators.required],
         
        });
 



  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private userService: UserServiceService,private router: Router, private authenticationService : AuthenticationServiceService,
) { }

  ngOnInit() {

  //   if (this.route.snapshot.queryParams['name']) {
  //     this.formGroup.patchValue({
  //       name: this.GetParam('name'),
  //       gender:this.GetParam('gender'),
  //       date: this.GetParam('date'),
  //       phone: this.GetParam('phone'),
  //       email: this.GetParam('email')
      
  //               // gender: this.route.snapshot.queryParams.get[this.gender],
  //       // date: this.route.snapshot.queryParams.get[],
  //       // phone: this.route.snapshot.queryParams.get[phone],
  //       // email: this.route.snapshot.queryParams.get[email]
  
  //     });

  // }
}

// GetParam(name){
//   const results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
//   if(!results){
//     return 0;
//   }
//   return results[1] || 0;
// }

 
   validateEmail() {
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
          this.formGroup.get('email').hasError('pattern') ? 'Not a valid email address' : '';
      }
    
      validatePhone() {
        return this.formGroup.get('phone').hasError('required') ? 'Field is required' :
          this.formGroup.get('phone').hasError('pattern') ? 'please type only numbers' :
            this.formGroup.get('phone').hasError('minlength') ? 'Minimum 10 digit' : '';
      }
    
      validateName() {
        return this.formGroup.get('name').hasError('required') ? 'Field is required' :
          this.formGroup.get('name').hasError('pattern') ? 'please type only alphabets' : '';
      }
    validateDate(e){
      let year = new Date(e).getFullYear();
    let today = new Date().getFullYear();
    if(today - year >= 0){
      return ("Enter past date");
    }

  }
    

  // onSubmit(){
  
  // if(this.formGroup.valid){
  //  alert("form submitted by user");
  //  console.log(this.formGroup.value);
  //  localStorage.setItem('user',JSON.stringify(this.formGroup.value));
  //  this.formGroup.reset();

  // }
  // }

  onSubmit(){
    debugger;
    if(this.formGroup.valid){


         this.userService.createForm(this.formGroup.value)
      
          .then(data=>{

        this.success=true;
        
        alert('Successfully submitted');
            this.router.navigate(['/login/form']);
      this.formGroup.reset();
      
          

      })
      
          .catch(err=>alert(err));
      
      } 
       
      
      
          }

          // display(){
          //   this.loggedInUser = this.childMessage ;
          //   this.authenticationService.getLoggedInUser(this.loggedInUser);
          //   this.router.navigate(['/login/dbData']);
          // }



  }





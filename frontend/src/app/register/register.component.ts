import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'
import { FormBuilder, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide=true;
 // regg= JSON.parse(localStorage.getItem('reg'));

 model: any;
 loading= false;

  fGroup= this.fb.group({
     'name': ['', [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]], 
    'userName' : ['', Validators.required],
    'password' : ['',Validators.required],
    'phone': ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],

    });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
    private userService: UserServiceService,
  ) { }

  ngOnInit() {
  }

  validateUserName() {
        return this.fGroup.get('userName').hasError('required') ? 'Field is required' :
           '';
      }
     validatePhone() {
          return this.fGroup.get('phone').hasError('required') ? 'Field is required' :
            this.fGroup.get('phone').hasError('pattern') ? 'please type only numbers' :
              this.fGroup.get('phone').hasError('minlength') ? 'Minimum 10 digit' : '';
        }
      
        validateName() {
          return this.fGroup.get('name').hasError('required') ? 'Field is required' :
            this.fGroup.get('name').hasError('pattern') ? 'please type only alphabets' : '';
        }

    validatePass(){

      return this.fGroup.get('password').hasError('required')?'Field is required': '';
    }

    // registeration(){

    //   if(this.fGroup.valid){
           

    //        if(this.regg != null  && this.fGroup.get('userName').value == (this.regg.userName)){

    //       alert('use different username');
          
          
    //        }

    //          else if(this.regg != null  &&this.fGroup.get('phone').value == (this.regg.phone)){

    //           alert('use different phone number');
    //          }

              
    //           else{  
                
    //             localStorage.setItem('reg',JSON.stringify(this.fGroup.value));
    //                 alert('registration done');
    //                 this.fGroup.reset;
    //                 this.router.navigateByUrl('/login');
    //               }
    //        }

    //   }

  //   registeration(){


  //     if(this.fGroup.valid){
  
      
         
  //         this.userService.create(this.model)
  //             .subscribe(
  //                data  => {
  //                   //this.model.push(data)
  //                    // this.alertService.success('Registration successful', true);
                     
  //                   this.router.navigate(['/login']);
  //                 }
                 
  //                 );

  //   }
  // }

    
 registeration(){
debugger;
  if(this.fGroup.valid){


   this.userService.create(this.fGroup.value)

    .then(data=>{

     

window.alert('Registered Successfully');


    })

    .catch(err=>alert(err));

      this.router.navigate(['/login']);
} 
 


    }
    canDeactivate() {
      
      console.log('deactivate operation');
      //return this.validateName.length > 0 || this.validatePass.length >0 || this.validatePhone.length >0 || this.validateUserName.length >0 ;
     return this.fGroup.invalid; 
       
  }
}





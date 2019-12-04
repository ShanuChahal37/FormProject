import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
 
  user=JSON.parse(localStorage.getItem('user'));

  gender = ['Male', 'Female',
  'Trans'];
  
  // const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formGroup= this.formBuilder.group({
     'name': [null, [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)]],
    // 'lastName': [null, [Validators.required,Validators.pattern(/^[a-z ,.'-]+$/i)]],
          'phone': [null, [Validators.required, Validators.pattern('^[0-9]*$'), Validators.minLength(10)]],
          'email': [null, [Validators.required, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
          'gender': [null, Validators.required],
          'date': [null, Validators.required],
         
        });
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit( ) {
    this.formGroup.patchValue({
      name: this.user.name,
      gender: this.user.gender,
      date: this.user.date,
      phone: this.user.phone,
      email: this.user.email

    });
  }


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
    if(today - year <= 0){
      return ("Enter past date");
    }

  }
    

  onSubmit(){
  
  if(this.formGroup.valid){
   alert("form eddited by user");
   console.log(this.formGroup.value);
   localStorage.setItem('user',JSON.stringify(this.formGroup.value));
   this.formGroup.reset();

  }

}
}

import { Component, OnInit ,Input} from '@angular/core';
import { FormData} from '../formData'
import { Location } from '@angular/common'
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';





@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {
  formData: FormData[]=[];

 // @Input() childMessage: string;


// user=JSON.parse(localStorage.getItem('user'));

// uuu=JSON.parse(localStorage.getItem('data'));
  

constructor(
  private userService:UserServiceService,
  private route: ActivatedRoute,
  private location: Location,
  private router: Router
  ) { }

  ngOnInit() {  this.userService.getAllFormData().subscribe(
    data => { this.formData  = data;
        console.log(data)}); }

 
  delete() :void{
   // debugger;
        localStorage.removeItem('user');
      //  this.location.back();
        //this.router.navigateByUrl('/form');
        location.reload();
  }

  editUser(user){

    // this.router.navigate(['/forms'],{
    //   name: user.name,
    //   gender: user.gender,
    //   date: user.date,
    //   phone: user.phone,
    //   email: user.email
    //  })

  
  }
 
  }


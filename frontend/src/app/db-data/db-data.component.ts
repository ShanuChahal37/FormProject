
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

import { UserServiceService } from '../user-service.service';
import { User } from '../userModal';

@Component({
  selector: 'app-db-data',
  templateUrl: './db-data.component.html',
  styleUrls: ['./db-data.component.css']
})
export class DbDataComponent implements OnInit {

   users: User[]=[];

  constructor(private userService:UserServiceService,
    private location: Location) { }

  ngOnInit() {

    this.userService.getAll().subscribe(
      dbdata => { this.users = dbdata;
          console.log(dbdata)});
 // console.log(dbdata); 
  }

  delete(item){

    debugger;
    this.userService.deleteUser(item).subscribe(
      data =>{
        location.reload();
        console.log(item +"deleted")});
      }
    

  }



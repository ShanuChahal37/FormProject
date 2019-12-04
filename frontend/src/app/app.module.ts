import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FieldsComponent } from './fields/fields.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatIconModule,MatTableModule ,MatNativeDateModule,  MatDatepickerModule,MatSelectModule,MatButtonModule,MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTabsModule,MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowDataComponent } from './show-data/show-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationServiceService } from './authentication-service.service';
import { UserServiceService } from './user-service.service';
import {HttpClientModule} from '@angular/common/http'
import { from } from 'rxjs';
import { DbDataComponent } from './db-data/db-data.component';
import{ RouteGaurdService } from './route-gaurd.service'
import { UserLoginServiceService } from './user-login-service.service';

const icons=[ MatIconModule,MatTableModule ,MatNativeDateModule,  MatDatepickerModule,MatSelectModule,MatButtonModule,MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule, MatTabsModule,MatToolbarModule
];
@NgModule({
  declarations: [
    AppComponent,
    FieldsComponent,
    ShowDataComponent,
    EditDataComponent,
    LoginComponent,
    RegisterComponent,
    DbDataComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,

    BrowserAnimationsModule, icons, HttpClientModule
    //MatButtonModule,MatTableModule ,MatIconModule,
    //MatCheckboxModule,MatDatepickerModule, MatNativeDateModule, MatTabsModule,MatToolbarModule,

   // MatFormFieldModule, MatInputModule, MatRippleModule,MatSelectModule,


  ],
  providers: [
    AuthenticationServiceService,
    UserServiceService,
    RouteGaurdService,
    UserLoginServiceService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

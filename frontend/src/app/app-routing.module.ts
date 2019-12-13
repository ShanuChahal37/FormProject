import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FieldsComponent } from './fields/fields.component';
import { ShowDataComponent} from './show-data/show-data.component'
import { EditDataComponent } from './edit-data/edit-data.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DbDataComponent } from './db-data/db-data.component';
import { RouteGaurdService } from './route-gaurd.service';




const routes: Routes = [
 
 { path:'', component:LoginComponent},
 { path: 'login',  component:LoginComponent,},
 { path: 'login/form', component: FieldsComponent, canActivate: [RouteGaurdService] },
 { path: 'login/display', component: ShowDataComponent, canActivateChild: [RouteGaurdService] },
 { path: 'edit', component:EditDataComponent },
 { path:'login/register', component: RegisterComponent, canDeactivate:[RouteGaurdService]},
 { path:'login/dbData', component: DbDataComponent,
//canActivateChild: [RouteGaurdService]
}
 

];

@NgModule({ 

  
  imports: [RouterModule.forRoot(routes), 
],
  exports: [RouterModule]
})
export class AppRoutingModule { }

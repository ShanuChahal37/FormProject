import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { appConfig} from './app.config'
import { User} from './userModal'
import{ Observable} from 'rxjs'
import {FormData} from './formData'


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  

  userUrl='http://localhost:3000';

  constructor(private http: HttpClient) { }

//   getAll(): Observable<Array<User>> {
//     return this.http.get(this.userUrl + '/getAll') as Observable<Array<User>>;
// }

// getById(_id: string) {
//     return this.http.get(appConfig.apiUrl + '/users/' + _id);
// }

// create(user: User): Observable<User> {
//     return this.http.post(this.userUrl + 'create', user) as Observable<User>;
// }

// login(loginUser: LoginDetails): Observable<LoginDetails>{
//   return this.http.post(this.userUrl + 'login', loginUser) as Observable<LoginDetails>;
// }


createForm(data) {

  
      return this.http.post(`${this.userUrl}/createForm`,data)
        .toPromise()
    }

create(data) {

  
      return this.http.post(`${this.userUrl}/create`,data)
        .toPromise()
    }

  getAll(){
   
  
        return this.http.get<User[]>(`${this.userUrl}/getAll`)
          
      }

    getAllFormData(){
   
  
          return this.http.get<FormData[]>(`${this.userUrl}/getAllData`)
            
        }
      deleteUser(item){

        console.log(item);
        return this.http.delete(`${this.userUrl}/deleteUser?id=${item}`)

       // return this.http.delete(this.userUrl + '/deleteUser', item);
  
      }

  //   getAll() {
  //     alert('Service alert');
  //     return this.http.get<User[]>(this.userUrl + '/getAll');
  // }


// update(user: User) {
//     return this.http.put(appConfig.apiUrl + '/users/' + user._id, user);
// }

// delete(_id: string) {
//     return this.http.delete(appConfig.apiUrl + '/users/' + _id);
// }


// public getAllLists():Observable<User[]> {

//   let URI = `${this.userUrl}/getAll`;
//   return this.http.get(URI)
//       .pipe(map(res => res.json()))
//       .pipe(map(res => <User[]>res.user));
// }



}

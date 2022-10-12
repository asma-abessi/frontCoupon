import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/User';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  PATH_OF_API="http://localhost:8089"

  requestHeader =new HttpHeaders({
    "No-Auth":"True" 
    })
    httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
      
      })
    }

  constructor(  private httpclient: HttpClient,private http : HttpClient, private userAuthServ : UserAuthService) { }
  public login(loginData){
    return this.http.post(this.PATH_OF_API + "/authenticate" ,loginData , {headers:this.requestHeader});
  }

  public forUser() {
    return this.httpclient.get(this.PATH_OF_API + '/forUser', {
      responseType: 'text',
    });
  }


  public forAdmin() {
    return this.httpclient.get(this.PATH_OF_API + '/forAdmin', {
      responseType: 'text',
    });
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>("http://localhost:8089/registerNewUser",user, {headers:this.requestHeader});
     }

  public roleMatch(allowedRoles): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthServ.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          } else {
            return isMatch;
          }
        }
      }
    }
  }
  getAllTravelssFromServer(): Observable<User[]> {
     
    return this.httpclient.get<User[]>('http://localhost:8089/retrieve-all-users');
  }
  
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper = new JwtHelperService();
  userInfo = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }

  get getUserInfo(){
    if(this.userInfo.value!=null)
      return this.userInfo.value;
    const access_token =  localStorage.getItem('access_token');
    if(access_token!=null){
      const decodedUser = this.jwtHelper.decodeToken(access_token);
      this.userInfo.next(decodedUser);
      return decodedUser;
    }
  }

  userLogout(){
    this.http.post("http://localhost:3000/auth/logout",{'id': this.getUserInfo['sub']});
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.userInfo.next(null);
  }

  userLogin(login: any): Observable<boolean> {
    if (login && login.email && login.password) {
    return this.http.post("http://localhost:3000/auth/login",login).pipe(
    map((data: any) => {
     if (!data) {
      return false;
     }
     console.log("###################### decoded use")
     localStorage.setItem('access_token', data.access_token);
     localStorage.setItem('refresh_token', data.refresh_token);
     const decodedUser = this.jwtHelper.decodeToken(data.access_token);
     localStorage.setItem('expiration', decodedUser.exp);
     console.log(decodedUser)
     this.userInfo.next(decodedUser);
     return true;
     })
     );
    }
    return of(false);
  }

  userRegister(register: any): Observable<boolean> {
    console.log(register);
    if (register && register.email && register.password) {
    return this.http.post("http://localhost:3000/auth/register",register).pipe(
    map((data: any) => {
     if (!data) {
      return false;
     }
     localStorage.setItem('access_token', data.access_token);
     localStorage.setItem('refresh_token', data.refresh_token);
     const decodedUser = this.jwtHelper.decodeToken(data.access_token);
     localStorage.setItem('expiration', decodedUser.exp);
     this.userInfo.next(decodedUser);
     return true;
     })
     );
    }
    return of(false);
  }
}

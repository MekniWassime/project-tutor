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

  userLogin(login: any): Observable<boolean> {
    console.log(login);
    console.log(this.userInfo);
    if (login && login.email && login.password) {
    return this.http.post("http://localhost:3000/auth/login",login).pipe(
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

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';


@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
   private authService:AuthService,
   private router:Router){}
  canActivate(
   route: ActivatedRouteSnapshot,
   state: RouterStateSnapshot)
   : boolean
   | UrlTree
   | Observable<boolean
   | UrlTree>
   | Promise<boolean
   | UrlTree>
  {
  //  let userData = this.authService.userInfo.getValue();
  //  if(userData && userData){ //! sub represents user id value     userData && userData.sub .. but i don't have this instance si i can't fetch the .sub !!!!!!!
    if(localStorage.getItem('access_token')){
      if((state.url.indexOf("/login")  != -1)){
        // loggin user trying to access login page
        this.router.navigate(["user/profile/show"]);
        return false;
      }
      else{
        return true;
      }
    }else if(localStorage.getItem('access_token')){

      if((state.url.indexOf("/register") != -1)){
        // not logged in users only navigate to login page and other pages
        this.router.navigate(["/user/profile/show"]);
        return false;
      }else{
        return true;
      }
    }else{
      if((state.url.indexOf("/login") == -1)
      // ||(state.url.indexOf("/aboutus") == -1)
      // ||(state.url.indexOf("/contactus") == -1)
      // ||(state.url.indexOf("/verifycode") == -1)
      // ||(state.url.indexOf("/") == -1)
      // ||(state.url.indexOf("/aboutus") == -1)
      // ||(state.url.indexOf("/footer") == -1)
      ){
        // not logged in users only navigate to login page and other pages
        this.router.navigate(["/login"]);
        return false;
      }else{
        return true;
      }
    }



  } // end canActivate()


}// end auth guard

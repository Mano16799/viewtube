import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild,  Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AppGuardGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private auth: AuthService){}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("inside can activate child");
    return false
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (state.url == '/upload/videoupload'){
        if (this.auth.isLoggedIn){
          return true
        }
        else{
          return this.router.parseUrl('/authenticate')
        }
      }
      return false
  }

}

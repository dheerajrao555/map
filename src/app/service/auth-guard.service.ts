import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { AppserviceService } from './appservice.service';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(private as: AppserviceService,private ls: LoginService,private router:Router) { }

  canActivate():boolean{
    if (this.ls.isUserLoggedIn()) {
      alert("loged in");
      return true;

    }
    else {
      this.router.navigate(['/login']);
      return false
    }


  }



}

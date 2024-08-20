import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivateFn {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    if(localStorage.getItem('token')){
      return true;
    }
    else{
      this.router.navigate(['']);
      return false;
    }
  }
  
}
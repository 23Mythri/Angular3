import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<LoginComponent> {
  canDeactivate(component:LoginComponent){
    if(component.uemail.dirty){
      return window.confirm("Are you sure want to navigate")
    }else{
      return false;
    }
  }
  
  }
  


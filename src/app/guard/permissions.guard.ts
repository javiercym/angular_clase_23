import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {
  
  constructor(private loginService: LoginService) {}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if (this.ingresa()) {
      return true;
    }else{

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No has iniciado sesion'
      })

      return false;
    }
  }
  ingresa(){
    return this.loginService.globalVariable;
  }
  
}

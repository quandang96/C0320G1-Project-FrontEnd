import { exception } from './../shared/exceptions/exceptions';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

    //Created by: Quân
export class RoleGuard implements CanActivate {

  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const currentAccount = this.tokenStorageService.getJwtResponse();
    const expectedRole = route.data.roles
    const roleAuthorities = this.tokenStorageService.getJwtResponse().authorities
    if (currentAccount) {
      if (roleAuthorities == expectedRole) {
        return true;
      } else {
        this.router.navigateByUrl('/');
        return false;
      }
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/user/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }

}

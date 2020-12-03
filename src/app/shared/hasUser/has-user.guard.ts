import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/services/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class HasUserGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.authService.hasUser()) {
        this.router.navigateByUrl('/profile');
        return false;

      } else {

        return true;
      }
  }
}

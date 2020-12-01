import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import UserLog from '../../models/userLog.model';
import { UserService } from '../user/user.service';




@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient ,
    private userService: UserService
    ) {}

  login(userLog: UserLog): any {
    return this.http.post(`${environment.url_api}/login`, userLog).pipe(

      tap((data) => {
        this.userService.saveUser(data);
      })
    );

  }
  logOut(): void{

    this.userService.deleteUser();
  }
  hasUser(): any {
    if (this.userService.getUser()){
      return true;
    }
    return false;
  }
}

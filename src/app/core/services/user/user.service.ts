import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private cookieService: CookieService) { }
  saveUser(user: any): void {

    this.cookieService.set('user', JSON.stringify(user), 1 , '/');
  }
  getUser(): string {

    return this.cookieService.get('user');
  }

  deleteUser(): void{
    this.cookieService.delete('user' , '/');
  }
}

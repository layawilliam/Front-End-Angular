import { Injectable } from '@angular/core';
import { UserRegister } from './../../models/userRegister.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient ) { }

  register( userRegister: UserRegister): any {
    return this.http.post(`${environment.url_api}/user`, userRegister);
  }
}

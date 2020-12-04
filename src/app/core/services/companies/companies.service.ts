import { Injectable } from '@angular/core';
import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get(`${environment.url_api}/companies`);
  }
}

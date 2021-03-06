import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) { }

  getAll(id: string): any {
    return this.http.get(`${environment.url_api}/history/${id}`);
  }
  newItem(values: any): any {
    return this.http.post(`${environment.url_api}/history/`, values );
  }
}

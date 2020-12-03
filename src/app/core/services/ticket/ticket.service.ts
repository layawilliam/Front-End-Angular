import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Ticket } from '../../models/ticket.model';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }

  getAll(id: string): any {
    return this.http.get(`${environment.url_api}/ticket/${id}`);
  }
  getByTk(tk: string): any {
    return this.http.get(`${environment.url_api}/ticket/${tk}`);
  }

  newTk(tk: Ticket): any {
    return this.http.post(`${environment.url_api}/ticket/`, tk);
  }
  updateTk(id: string , changes: any): any {
    return this.http.put(`${environment.url_api}/ticket/${id}`, changes );
  }

  deleteTk(id: string): any {
    return this.http.delete(`${environment.url_api}/ticket/${id}`);
  }


}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Promo} from '../models/promo';

@Injectable({
  providedIn: 'root'
})
export class PromoService {

  public urlAPI = 'http://localhost:8080/api/v1/employee/promotion';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json'
  };

  constructor(
    public http: HttpClient
  ) { }

  getAirlines(): Observable<any> {
    return this.http.get(this.urlAPI + `/airline`, this.httpOptions);
  }

  getAirports(): Observable<any> {
    return this.http.get(this.urlAPI + `/airport`, this.httpOptions);
  }

  getPromo(status: string): Observable<any> {
    return this.http.get(this.urlAPI + `?page=1&status=${status}`, this.httpOptions);
  }

  createPromo(promo: Promo): Observable<any> {
    return this.http.post(this.urlAPI + `/create`, JSON.stringify(promo), this.options);
  }

}

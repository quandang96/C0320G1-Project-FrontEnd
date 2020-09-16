import { PromoUpdateDto } from './../models/dto/PromoUpdateDto';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  public urlAPI = 'http://localhost:8080/api/v1/employee/promotion';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }),
   
  };

 

  constructor(public http: HttpClient) { }

  //Tùng
  getPromoById(id:number): Observable<any> {
    return this.http.get(`${this.urlAPI}/promo-edit/${id}`, this.httpOptions);
  }

  //Tùng
  updatePromo(id: number, value: any): Observable<any> {
    debugger
    return this.http.put(`${this.urlAPI}/update-edit/${id}`,JSON.stringify(value), this.httpOptions);
  }


  //Tùng
  deletePromo(idDelete: number): Observable<any> {
    return this.http.put<any>(`${this.urlAPI}/promo-delete/${idDelete}`, this.httpOptions);
  }
  getAirlines(): Observable<any> {
    return this.http.get(this.urlAPI + `/airline`, this.httpOptions);
  }

  getAirports():  Observable<any> {
    return this.http.get(this.urlAPI + `/airport`, this.httpOptions);
  }
  getPromo(status: string, page: number): Observable<any> {
    return this.http.get(this.urlAPI + `?page=${page}&status=${status}`, this.httpOptions);
  }

  createPromo(promo: any): any {
    return this.http.post<any>(this.urlAPI + `/create`, promo, this.httpOptions);
  }

  searchPromo(infoSearch, page: number): Observable<any> {
    return this.http.post<any>(this.urlAPI + `/search?page=${page}`, JSON.stringify(infoSearch) , this.httpOptions);
  }

  convertDate(date: string): string {
    return (date + 'T00:00:00');
  }

}

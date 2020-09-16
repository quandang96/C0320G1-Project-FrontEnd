import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
  };

  constructor(
    public http: HttpClient
  ) { }






  //Tùng
  getPromoById(id: number): Observable<any> {
    return this.http.get(`${this.urlAPI}/promo-edit/${id}`, this.httpOptions);
  }

  //Tùng
  updatePromo(id: number, value: any): Observable<any> {
    debugger
    return this.http.put(`${this.urlAPI}/update-edit/${id}`, JSON.stringify(value), this.httpOptions);
  }


  //Tùng
  deletePromo(idDelete: number): Observable<any> {
    return this.http.put<any>(`${this.urlAPI}/promo-delete/${idDelete}`, this.httpOptions);
  }
  getAirlines(): Observable<any> {
    return this.http.get(this.urlAPI + `/airline`, this.httpOptions);
  }

  getAirports(): Observable<any> {
    return this.http.get(this.urlAPI + `/airport`, this.httpOptions);
  }

  getPromo(status: string, page: number): Observable<any> {
    return this.http.get(this.urlAPI + `?page=${page}&status=${status}`, this.httpOptions);
  }

  createPromo(promo: any): any {
    return this.http.post<any>(this.urlAPI + `/create`, promo, this.options);
  }

  searchPromo(infoSearch, page: number): Observable<any> {
    return this.http.post<any>(this.urlAPI + `/search?page=${page}`, JSON.stringify(infoSearch), this.options);
  }

  convertDate(date: string): string {
    return (date + 'T00:00:00');
  }

}

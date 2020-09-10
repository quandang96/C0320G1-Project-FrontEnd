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
    })
  };

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    responseType: 'text' as 'json'
  };

  constructor(public http: HttpClient) { }

  //Tùng
  getPromoById(id): Observable<PromoUpdateDto> {
    return this.http.get<PromoUpdateDto>(this.urlAPI + id, this.httpOptions);
  }

  //Tùng
  updatePromo(promo: PromoUpdateDto, id): Observable<PromoUpdateDto> {
    return this.http.put<PromoUpdateDto>(this.urlAPI + 'promo-edit/' + id, JSON.stringify(promo), this.httpOptions);
  }


  //Tùng
  deletePromo(idDelete: number): any {
    return this.http.put<any>(`${this.urlAPI}/promo-delete/${idDelete}`, this.options);
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TransactionDetailDTO} from '../models/dto/TransactionDetailDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly baseUrl = 'http://localhost:8080/api/v1/checkin';

  constructor(private http: HttpClient) { }

  // Thành Long
  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    responseType: 'text' as 'json'
  };

  // Thành Long
  getTransactionDetailHttpOptions(id: number): Object {
    const transactionDetail = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        id
      }
    };
    return transactionDetail;
  }

  // Thành Long
  searchTransactionDetail(id: number): Observable<TransactionDetailDTO[]> {
    return this.http.get<TransactionDetailDTO[]>(`${this.baseUrl}`, this.getTransactionDetailHttpOptions(id));
  }

  // Thành Long
  checkinPassenger(idPassenger: number[]): any {
    const data = { ids: idPassenger };
    return this.http.put<any>(`${this.baseUrl}/checkin-list`, data, this.options);
  }
}

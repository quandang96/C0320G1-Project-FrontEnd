import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TransactionDetailSearchDto} from '../models/dto/TransactionDetailSearchDto';
import {Observable} from 'rxjs';
import {Page} from '../models/dto/page';
import {TransactionDetailDTO} from '../models/dto/TransactionDetailDTO';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private readonly baseUrl = 'http://localhost:8080/api/v1/customer';

  constructor(private http: HttpClient) { }

  // Thành Long
  getTransactionDetailHttpOptions(searchField: TransactionDetailSearchDto, page: number): Object {
    const transactionDetail = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        bookingCode: searchField.bookingCode,
        fullName: searchField.fullName,
        page
      }
    };
    return transactionDetail;
  }

  // Thành Long
  searchTransactionDetail(searchField: TransactionDetailSearchDto, page: number): Observable<Page<TransactionDetailDTO>> {
    return this.http.get<Page<TransactionDetailDTO>>(`${this.baseUrl}/checkin`, this.getTransactionDetailHttpOptions(searchField, page));
  }
}

import { Page } from './../models/dto/Page';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  getOptions(page: number): Object {
    let options = {
      headers : this.httpOptions.headers,
      params : {
        page: page
      }
    }
    return options;
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',     
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Origin': 'http://localhost:4200'
    })
  };
  
  private transactionsUrl = "http://localhost:8080/api/v1/customer/transactions";

 
  constructor(private http: HttpClient) { }

  getAllTransactionsByAccountId(accountId:number, page: number): Observable<Page<Transaction>>{
    return this.http.get<Page<Transaction>>(this.transactionsUrl + '/' + accountId, this.getOptions(page));
  }
  

}

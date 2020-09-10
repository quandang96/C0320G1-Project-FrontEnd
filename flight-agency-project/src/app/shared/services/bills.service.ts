import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill';
import { Page } from './../models/page';
import { BillSearchFields } from '../models/billSearchField';


@Injectable({
  providedIn: 'root'
})
export class BillService {

  // Son
  ApiBill = "http://localhost:8081/api/v1/bills-list";
  url = "http://localhost:8081/api/v1/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  getProductHttpOptions(searchField: BillSearchFields, page: number): Object {
    const product = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        billCode: searchField.billCode,
        billTax: searchField.billTax,
        name: searchField.name,
        page
      }
    };
    return product;
  }


  constructor(private http: HttpClient) { }

  getBillsList(): Observable<Page<Bill>> {
    return this.http.get<Page<Bill>>(this.ApiBill)
  }

  getBillsListSearch(searchField: BillSearchFields,page: number): Observable<Page<Bill>> {
    // return this.http.get<Page<Bill>>(`${this.url}/bill-search`, this.getProductHttpOptions(searchField, page));
    return this.http.get<Page<Bill>>(`${this.url}/bill-search?billCode=${searchField.billCode}&billTax=${searchField.billTax}&name=${searchField.name}`);
  }


}




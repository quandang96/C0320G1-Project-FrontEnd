
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Page} from '../models/dto/page';
import {CustomerCheckinDto} from '../models/dto/CustomerCheckinDto';
import {CustomerSearchDto} from '../models/dto/CustomerSearchDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly API_URL = 'http://localhost:8080/api/v1/cart';
  private readonly baseUrl = 'http://localhost:8080/api/v1/employee';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Thành Long
  getPassengerCheckinHttpOptions(searchField: CustomerSearchDto, page: number): Object {
    const passenger = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        fullName: searchField.fullName,
        address: searchField.address,
        page
      }
    };
    return passenger;
  }

  constructor(private http: HttpClient) { }

  // Hung: Lấy danh sách airport,
  getAllAirports(): Observable<any> {
    return this.http.get(this.API_URL, this.httpOptions);
  }

  // Thành Long
  getAllPassengerCheckin(searchField: CustomerSearchDto, page: number): Observable<Page<CustomerCheckinDto>> {
    return this.http.get<Page<CustomerCheckinDto>>(`${this.baseUrl}/customer-checkin-list`, this.getPassengerCheckinHttpOptions(searchField, page));
  }
}

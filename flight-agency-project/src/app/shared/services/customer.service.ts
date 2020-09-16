import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerUpdateDto} from '../models/dto/CustomerUpdateDto';
import {AbstractControl} from '@angular/forms';
import {CustomerChangePassDto} from '../models/dto/CustomerChangePassDto';

@Injectable()
export class CustomerService {
  private readonly API_URL_CUSTOMER = 'http://localhost:8080/api/v1/customer/';

  constructor(private http: HttpClient) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Created By Thiện
  getCustomerById(id): Observable<CustomerUpdateDto> {
    return this.http.get<CustomerUpdateDto>(this.API_URL_CUSTOMER + id, this.httpOptions);
  }

  // Created By Thiện
  updateCustomer(customer: CustomerUpdateDto, id): Observable<CustomerUpdateDto> {
    return this.http.put<CustomerUpdateDto>(this.API_URL_CUSTOMER + 'update/' + id, JSON.stringify(customer), this.httpOptions);
  }

  // Created By Thiện
  updatePassword(customer: CustomerChangePassDto, id): Observable<CustomerChangePassDto> {
    return this.http.put<CustomerChangePassDto>(this.API_URL_CUSTOMER + 'changepass/' + id, JSON.stringify(customer), this.httpOptions);
  }

  // Created By Thiện - validate xác nhận mật khẩu
  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.newPassword !== v.confirmPassword) ? {
      passwordnotmatch: true} : null ; }
  validateBirthday(c: AbstractControl) {
    const chooseDate = new Date(c.value).getTime();
    const currentDate = new Date().getTime();
    return(chooseDate - currentDate >= 0) ?
      {chooseDateGreaterThanCurrentDate: true} : null;
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {employeeDto} from '../models/dto/employeeDto';
import {AbstractControl} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_URL_EMPLOYEE = 'http://localhost:8080/api/v1/employee/';
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getEmployeeById(id): Observable<employeeDto> {
    return this.http.get<employeeDto>(this.API_URL_EMPLOYEE + id, this.httpOptions);
  }

  changePassword(employee: employeeDto, id): Observable<employeeDto> {
    return this.http.put<employeeDto>(this.API_URL_EMPLOYEE + 'changePassword/' + id, JSON.stringify(employee), this.httpOptions);
  }

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.newPassword === v.confirmPassword) ? null : {
      passwordnotmatch: true
    };
  }
}

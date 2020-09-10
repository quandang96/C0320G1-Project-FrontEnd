import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AbstractControl} from '@angular/forms';
import {employeeDto} from '../models/dto/employeeDto';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_URL_EMPLOYEE = 'http://localhost:8080/api/v1/employee/';
  private readonly API_URL = 'http://localhost:8080/api/v1/cart';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  // Hung: Lấy danh sách airport,
  getAllAirports(): Observable<any> {
    return this.http.get(this.API_URL, this.httpOptions);
  }

  // creator: Mậu
  getEmployeeById(id): Observable<employeeDto> {
    return this.http.get<employeeDto>(this.API_URL_EMPLOYEE + id, this.httpOptions);
  }

// creator: Mậu
  changePassword(employee: employeeDto, id): Observable<employeeDto> {
    return this.http.put<employeeDto>(this.API_URL_EMPLOYEE + 'changePassword/' + id, JSON.stringify(employee), this.httpOptions);
  }

}

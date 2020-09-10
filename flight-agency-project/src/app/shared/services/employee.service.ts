import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private readonly API_URL = "http://localhost:8080/api/v1/cart";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  //Hung: Lấy danh sách airport,
  getAllAirports(): Observable<any>{
    return this.http.get(this.API_URL,this.httpOptions);
  }


}

import { EmployeeFlightSearchDTO } from '../models/dto/employeeFlightSearchDTO';
import { Transaction } from './../models/transaction';
import { TransactionPassengerDTO } from '../models/dto/transaction-passengerDTO';
import { FlightSchedule } from './../models/flight-schedule';
import { Airport } from './../models/airport';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Page } from '../models/dto/page';
import { AbstractControl } from '@angular/forms';
import { ɵNullViewportScroller } from '@angular/common';
import {employeeDto} from '../models/dto/employeeDto';





@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private readonly API_URL_EMPLOYEE = 'http://localhost:8080/api/v1/employee/';
  private readonly API_URL = "http://localhost:8080/api/v1/cart";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  //BHung get page filghtSchedule
  getFlightScheduleHttpOptions(page: number): Object {
    const flightSchedule = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        page
      }
    };
    return flightSchedule;
  }

  constructor(private http: HttpClient) {
  }

  //BHung: Lấy danh sách airport:
  getAllAirports(): Observable<Airport[]>{
    return this.http.get<Airport[]>(this.API_URL+"/airport",this.httpOptions);
  }

  //BHung: tìm kiếm danh sách flights:
  findAllFlightSchedules(flightDTO: EmployeeFlightSearchDTO, page: number): Observable<Page<FlightSchedule>>{
    return this.http.post<Page<FlightSchedule>>(this.API_URL+"/flightSchedule",JSON.stringify(flightDTO),this.getFlightScheduleHttpOptions(page))
  };

  //BHung tìm kiếm flight theo id:
  findFlightById(id:number):Observable<FlightSchedule>{
    return this.http.get<FlightSchedule>(this.API_URL+"/flightSchedule/"+id);
  }

  //BHung check email
  checkAccountByEmail(email: string):Observable<any>{
    return this.http.get<any>(this.API_URL+"/checkEmail",{
      params:{
        email:email
      }
    });
  }

  //BHung luu ticket
  saveTransactionAndPassenger(transpass: TransactionPassengerDTO):Observable<Transaction[]>{
    return this.http.post<Transaction[]>(this.API_URL+"/transPass/save",JSON.stringify(transpass),this.httpOptions);
  }

  //BHung tim transaction
  findTransactionById(id: number): Observable<Transaction>{
    return this.http.get<Transaction>(this.API_URL+"/transaction/"+id);
  }

  //BHung validate date
  validateGreaterThanCurrentDate(c: AbstractControl) {
    var chooseDate = Date.parse(c.value);
    var currentDate = Date.parse(new Date().toISOString().slice(0,10));
    return (chooseDate - currentDate < 0) ?
      { chooseDateGreaterThanCurrentDate: true } : null;
  }
  validateArvDateGreaterThanDeptDate(c: AbstractControl){
    const v = c.value;
    return (Date.parse(v.arrivalDate)-Date.parse(v.departureDate)<0)?
      {chooseArvDateSmallerThanDeptDate: true} : null;
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

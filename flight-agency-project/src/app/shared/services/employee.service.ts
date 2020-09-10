import { Transaction } from './../models/transaction';
import { TransactionPassengerDTO } from './../models/dto/TransactionPassengerDTO';
import { FlightSearchDTO } from './../models/dto/FlightSearchDTO';
import { Account } from './../models/account';
import { FlightSchedule } from './../models/flight-schedule';
import { Airport } from './../models/airport';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //BHung api url employee
  private readonly API_URL = "http://localhost:8080/api/v1/employee";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  //BHung: Lấy danh sách airport:
  getAllAirports(): Observable<Airport[]>{
    return this.http.get<Airport[]>(this.API_URL+"/airport",this.httpOptions);
  }

  //BHung: tìm kiếm danh sách flights:
  findAllFlightSchedules(flightDTO: FlightSearchDTO): Observable<FlightSchedule[]>{
    return this.http.post<FlightSchedule[]>(this.API_URL+"/flightSchedule",JSON.stringify(flightDTO),this.httpOptions);
  }

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
  saveTransactionAndPassenger(transpass: TransactionPassengerDTO):Observable<any>{
    return this.http.post(this.API_URL+"/transPass/save",JSON.stringify(transpass));
  }

  //BHung tim transaction
  findTransactionById(id: number): Observable<Transaction>{
    return this.http.get<Transaction>(this.API_URL+"/transaction"+id);
  }

}

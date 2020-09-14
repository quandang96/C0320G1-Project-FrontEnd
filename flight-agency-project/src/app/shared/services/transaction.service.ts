<<<<<<< HEAD
import { Page } from './../models/dto/Page';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Transaction } from '../models/transaction';
=======
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightSchedule } from '../models/flight-schedule';
import { FlightSearchDTO } from '../models/dto/flight-search-dto';
import { Observable } from 'rxjs';
import { PriceInfo } from './../models/dto/price-info';
import { PassengerInfoDTO } from '../models/passenger';
import { BookingDTO } from '../models/transaction';
>>>>>>> ea89b8b39060ca91f91f2adca90737fcede4656d

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

<<<<<<< HEAD
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
  

=======
  private readonly API_URL = 'http://localhost:8080/api/v1'

  departureFlight: FlightSchedule;
  returnFlight: FlightSchedule;
  bookingInfo: FlightSearchDTO;
  depPriceInfo: PriceInfo[] = [];
  retPriceInfo: PriceInfo[] = [];
  departurePassenger: Array<PassengerInfoDTO>;
  returnPassenger: Array<PassengerInfoDTO>;

  constructor(
    private http: HttpClient
  ) { }

  // Creator: Duy
  createTransaction(): Observable<any> {
    const booking = this.createBooking();
    return this.http.post(`${this.API_URL}/transaction/booking`, booking);
  }

  // Creator: Duy
  private calcTotalPrice(priceInfo: PriceInfo[], baggageInfo: Array<PassengerInfoDTO>): number {
    let total: number = 0;
    priceInfo.forEach(val => {
      total = +total + +val.totalPrice;
    });
    baggageInfo.forEach(val => {
      total = +total + +val.baggagePrice;
    });
    return total;
  }

  // Creator: Duy
  private createBooking(): BookingDTO {
    const booking = {} as BookingDTO;
    booking.retFlightId = 0;
    booking.accountId = 1;
    booking.depFlightId = this.departureFlight.id;
    booking.depBranch = this.departureFlight.branch.name;
    booking.depTotalPrice = this.calcTotalPrice(this.depPriceInfo, this.departurePassenger);
    booking.depPassengers = this.departurePassenger;
    if (this.returnFlight != null) {
      booking.retFlightId = this.returnFlight.id;
      booking.retBranch = this.returnFlight.branch.name;
      booking.retTotalPrice = this.calcTotalPrice(this.retPriceInfo, this.returnPassenger);
      booking.retPassengers = this.returnPassenger;
    }
    return booking;
  }
>>>>>>> ea89b8b39060ca91f91f2adca90737fcede4656d
}

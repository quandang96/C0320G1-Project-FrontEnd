import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlightSchedule } from '../models/flight-schedule';
import { FlightSearchDTO } from '../models/dto/flight-search-dto';
import { Observable } from 'rxjs';
import { PriceInfo } from './../models/dto/price-info';
import { PassengerInfoDTO } from '../models/passenger';
import { BookingDTO } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

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
    const booking = this.createBooking() as BookingDTO;
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
    booking.depTotalPrice = this.calcTotalPrice(this.depPriceInfo, this.departurePassenger);
    booking.depPassengers = this.departurePassenger;
    if (this.returnFlight != null) {
      booking.retFlightId = this.returnFlight.id;
      booking.retTotalPrice = this.calcTotalPrice(this.retPriceInfo, this.returnPassenger);
      booking.retPassengers = this.returnPassenger;
    }
    return booking;
  }
}

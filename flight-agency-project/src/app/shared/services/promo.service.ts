import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Feedback } from '../models/Feedback';
import {FlightSchedule} from '../models/flight-schedule';
import {FlightSearchDTO} from '../models/dto/flight-search-dto';

@Injectable({
  providedIn: 'root'
})
export class PromoService {
  API_URL = 'http://localhost:8080/api/v1/home';
  // tslint:disable-next-line:variable-name
  private base_url = 'http://localhost:8080/api/v1/promotion';
  // tslint:disable-next-line:variable-name
  private base1_url = 'http://localhost:8080/api/v1/flight-promotion';

  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {

  }

  // tslint:disable-next-line:ban-types
  saveFeedback(feedbackDTO: Object): Observable<Feedback> {
    return this.http.post<Feedback>(this.API_URL + '/save-feedback', JSON.stringify(feedbackDTO), this.httpOptions);
  }

  getTransactionDetailHttpOptions(departureAirport: string): Object {
    const promo = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      params: {
        departureAirport
      }
    };
    return promo;
  }

  getAllFlightPromo(departureDateTime: string): Observable<FlightSchedule[]> {
    return this.http.get<FlightSchedule[]>(`${this.base_url}`, this.getTransactionDetailHttpOptions(departureDateTime));
  }
  searchFlightPromo(flightSearch: FlightSearchDTO): Observable<FlightSchedule[]> {
  return this.http.post<FlightSchedule[]>(`${this.API_URL}`, flightSearch );
}

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightSchedules } from '../models/FlightSchedules';
import { Page } from '../models/dto/Page';

@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {
  // D-Bach
  private API = 'http://localhost:8080/api/v1/flight-schedule';

  constructor(
    private httpClient: HttpClient
  ) { }

  // D-Bach
  // tslint:disable-next-line:ban-types
  getAllFlightScheduleHttpOption(page: number): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      params: {
        page
      }
    };
  }

  // D-Bach
  getAllFlightSchedule(page: number): Observable<Page<FlightSchedules>> {
    return this.httpClient.get<Page<FlightSchedules>>(this.API, this.getAllFlightScheduleHttpOption(page));
  }
}

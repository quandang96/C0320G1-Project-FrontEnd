import { Injectable } from '@angular/core';
import { FlightSchedule } from '../models/flight-schedule';
import { HttpClient } from '@angular/common/http';
import { FlightSearchDTO } from './../models/dto/flight-search-dto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {

  private readonly API_URL = 'http://localhost:8080/api/v1'
  branchImages: string[] = ['', 'assets/branches-image/vietjet.png', 'assets/branches-image/pacific.png', 'assets/branches-image/bamboo.png', 'assets/branches-image/vnairline.gif'];
  departureFlight: FlightSchedule;
  returnFlight: FlightSchedule;
  bookingInfo: FlightSearchDTO;

  constructor(
    private http: HttpClient
  ) {
    // this.departureFlight = null;
    // this.returnFlight = null;
  }

  search(flightSearch: FlightSearchDTO): Observable<FlightSchedule[]> {
    return this.http.post<FlightSchedule[]>(`${this.API_URL}/flight-schedule`, flightSearch);
  }
}

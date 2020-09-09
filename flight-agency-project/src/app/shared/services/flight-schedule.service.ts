import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightSchedules } from '../models/FlightSchedules';
import { Page } from '../models/dto/Page';
import { FlightSchedule } from '../models/flight-schedule';
import { FlightSearchDTO } from '../models/dto/flight-search-dto';


@Injectable({
  providedIn: 'root'
})
export class FlightScheduleService {
  private readonly API_URL = 'http://localhost:8080/api/v1';
  // tslint:disable-next-line:max-line-length
  branchImages: string[] = ['', 'assets/branches-image/vietjet.png', 'assets/branches-image/pacific.png', 'assets/branches-image/bamboo.png', 'assets/branches-image/vnairline.gif'];

  constructor(
    private http: HttpClient
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
    return this.http.get<Page<FlightSchedules>>(`${this.API_URL}/flight-schedule`, this.getAllFlightScheduleHttpOption(page));
  }

  // Creator: Duy
  // search for flight schedule
  search(flightSearch: FlightSearchDTO): Observable<FlightSchedule[]> {
    return this.http.post<FlightSchedule[]>(`${this.API_URL}/flight/schedule`, flightSearch);
  }
}

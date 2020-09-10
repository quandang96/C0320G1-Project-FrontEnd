import {Component, OnInit} from '@angular/core';
import { FlightScheduleService } from '../shared/services/flight-schedule.service';
import { FlightSchedules } from '../shared/models/FlightSchedules';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Airport } from '../shared/models/airport';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // D-Bach
  oneWay = false;
  flightSchedule: Observable<FlightSchedules[]>;
  airportCity: Airport[];
  pageSize: number;
  currentPage: number;
  totalElements: number;
  arr: number[];
  branchImages: string[];
  isEmpty = false;

  constructor(
    private flightScheduleService: FlightScheduleService
  ) {
  }

  // D-Bach
  getPage(pageNumber: number) {
    this.flightSchedule = this.flightScheduleService.getAllFlightSchedule(pageNumber - 1).pipe(tap(page => {
      this.totalElements = page.totalElements;
      this.pageSize = page.size;
      this.currentPage = pageNumber;
      this.arr = [];
      const firstIndex = this.pageSize * (this.currentPage - 1) + 1;
      const lastIndeex = this.pageSize * this.currentPage;
      for (let i = firstIndex; i <= lastIndeex; i++) {
        this.arr.push(i);
      }

      this.isEmpty = page.content.length === 0;
        // tslint:disable-next-line:no-shadowed-variable
    }, error => {
      console.log(error);
    }),
      map(page => page), map(page => page.content)
    );
  }

  // D-Bach
  ngOnInit() {
    this.getPage(1);
    this.branchImages = this.flightScheduleService.branchImages;
    this.flightScheduleService.getAllAirportCity().subscribe(data => {
      this.airportCity = data;
    });
  }

  // D-Bach
  oneWayPicked() {
    this.oneWay = true;
  }

  // D-Bach
  twoWayPicked() {
    this.oneWay = false;
  }
}

import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FlightScheduleService } from '../shared/services/flight-schedule.service';
import { FlightSchedule } from '../shared/models/flight-schedule';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Airport } from '../shared/models/airport';
import { FlightSearchForm } from '../shared/models/dto/flight-search-form';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // D-Bach
  oneWay = false;
  flightSchedule: Observable<FlightSchedule[]>;
  searchForm: FormGroup;
  airportCity: Airport[];
  pageSize: number;
  currentPage: number;
  totalElements: number;
  arr: number[];
  branchImages: string[];
  isEmpty = false;

  constructor(
    private flightScheduleService: FlightScheduleService,
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog
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
    this.searchForm = this.formBuilder.group({
      departureAirport: ['', [Validators.required]],
      arrivalAirport: ['', [Validators.required]],
      departureDateTime: [new Date(), [Validators.required]],
      arrivalDateTime: [new Date(), [Validators.required]],
      babies: [0, [Validators.required]],
      children: [0, [Validators.required]],
      adults: [1, [Validators.required]]
    }, {validators : [this.checkDepartureAirportAndArrivalAirport, this.checkAdultsAndBabies, this.checkAdultsAndChildren]});
  }

  // D-Bach
  checkDepartureAirportAndArrivalAirport(formGroup: AbstractControl): ValidationErrors | null {
    const check: FlightSearchForm = formGroup.value;
    const departureAirport = check.departureAirport;
    const arrivalAirport = check.arrivalAirport;
    if (departureAirport === arrivalAirport && departureAirport !== '' && arrivalAirport !== '') {
      return {checkPlace: true};
    }
    return null;
  }

  // D-Bach
  checkAdultsAndBabies(formGroup: AbstractControl): ValidationErrors | null {
    const check: FlightSearchForm = formGroup.value;
    const adults = check.adults;
    const babies = check.babies;
    if (babies > adults) {
      return {checkBabies: true};
    }
    return null;
  }

  // D-Bach
  checkAdultsAndChildren(formGroup: AbstractControl): ValidationErrors | null {
    const check: FlightSearchForm = formGroup.value;
    const adults = check.adults;
    const children = check.children;
    console.log(adults);
    if ((+adults + +children) >= 9) {
      return {checkNumber: true};
    }
    return null;
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '900px',
      height: '600px',
      data: {}
    });
  }
  // D-Bach
  sendData() {
    this.flightScheduleService.flightSearchForm = this.searchForm.value as FlightSearchForm;
    this.flightScheduleService.flightSearchForm.isRoundTrip = this.oneWay ? '' : '1';
    console.log(`vo day`);
    this.router.navigateByUrl('flight/schedule');
    console.log(`vo day1`);
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

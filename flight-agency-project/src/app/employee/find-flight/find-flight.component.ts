import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface flightDTO {
  departurePlace: string,
    arrivalPlace: string,
    departureDate: string,
    arrivalDate: string
}
@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit {
  fightType: boolean = false;
  flight= {} as flightDTO
  constructor(private router: Router) { }

  ngOnInit() {
  }

}

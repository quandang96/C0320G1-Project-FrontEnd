import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';
import { FlightSearchDTO } from 'src/app/shared/models/dto/flight-search-dto';

@Component({
  selector: 'app-flight-booking-detail',
  templateUrl: './flight-booking-detail.component.html',
  styleUrls: ['./flight-booking-detail.component.css']
})
export class FlightBookingDetailComponent implements OnInit {

  @Input() depSchedule: FlightSchedule;
  @Input() retSchedule: FlightSchedule;
  @Input() flightSearch: FlightSearchDTO;
  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

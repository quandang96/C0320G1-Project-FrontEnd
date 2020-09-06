import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightBookingDetailComponent } from '../flight-booking-detail/flight-booking-detail.component';
@Component({
  selector: 'app-flight-schedule-list',
  templateUrl: './flight-schedule-list.component.html',
  styleUrls: ['./flight-schedule-list.component.css']
})
export class FlightScheduleListComponent implements OnInit {

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
  }

  open() {
    this.modalService.open(FlightBookingDetailComponent, { size: 'lg' });
  }

}

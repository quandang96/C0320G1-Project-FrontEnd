import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flight-booking-detail',
  templateUrl: './flight-booking-detail.component.html',
  styleUrls: ['./flight-booking-detail.component.css']
})
export class FlightBookingDetailComponent implements OnInit {

  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

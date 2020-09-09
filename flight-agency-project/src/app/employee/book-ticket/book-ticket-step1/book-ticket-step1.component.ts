import { flightDTO } from './../../find-flight/find-flight.component';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-ticket-step1',
  templateUrl: './book-ticket-step1.component.html',
  styleUrls: ['./book-ticket-step1.component.css']
})
export class BookTicketStep1Component implements OnInit {

  @Input() flight = {} as flightDTO;
  @Input() ticketForm: FormGroup;
  twoWay: boolean = null;
  departureDates = [];
  arrivalDates = [];
  //Biến xét active class
  isButtonDepartureClick : number =3;
  isButtonArrivalClick : number =3;
  
  constructor() {
   }

  ngOnInit() {
    
  }

}

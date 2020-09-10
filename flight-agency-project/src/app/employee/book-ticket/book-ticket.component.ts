//Creator:Nguyễn Xuân Hùng
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  flight1: object = null;
  flight = {
    "departurePlace": {
      "id": 12,
      "city": "Hà Nội",
      "code": null,
      "name": null
  },
  "arrivalPlace": {
      "id": 1,
      "city": "Hồ Chí Minh",
      "code": null,
      "name": null
  },
  "departureDate": "2020-09-21",
  "arrivalDate": "",
  "adult": 2,
  "child": 2,
  "baby": 0
  }
  ticketForm: FormGroup;
  constructor(private router: Router) {
    this.flight1 = this.router.getCurrentNavigation().extras.state;
   }

  ngOnInit() {
    this.ticketForm = new FormGroup({
      'flightDetails' : new FormGroup({
        'DeptFlightSchedule' : new FormControl(null,Validators.required),
        'arvFlightSchedule' : new FormControl(null)
      }),
      'adultPassengers' : new FormArray(this.returnAdultFormGroupList()),
      'childPassengers' : new FormArray(this.returnChildFormGroupList()),
      'otherDetails': new FormGroup({
        'emailCheck': new FormControl(''),
        'deptPrice': new FormControl(0,Validators.required),
        'arvPrice': new FormControl(0),
        'totalPrice': new FormControl(0,Validators.required)
      })
  })
  }

  //trả về list adult formgroup
  returnAdultFormGroupList(){
    let array = [];
    for(let i=0;i<this.flight.adult;i++){
      array.push(
        new FormGroup({
          'fullName' : new FormControl('',[Validators.required]),
          'gender' : new FormControl('',[Validators.required]),
          'phoneNumber': new FormControl('',[]),
          'email': new FormControl('',[]),
          "identifierCard": new FormControl('',[Validators.required]),
          'luggageWeight': new FormControl('',[])
        })
      )
    }
    return array;
  }

  //trả về list child formgroup
  returnChildFormGroupList(){
    let array = [];
    for(let i=0;i<this.flight.child;i++){
      array.push(
        new FormGroup({
          'fullName' : new FormControl('',[Validators.required]),
          'gender' : new FormControl('',[Validators.required]),
          'phoneNumber': new FormControl('',[]),
          'luggageWeight': new FormControl('',[])
        })
      )
    }
    return array;
  }
}

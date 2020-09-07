import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';

@Component({
  selector: 'app-flight-oneway-schedule',
  templateUrl: './flight-oneway-schedule.component.html',
  styleUrls: ['./flight-oneway-schedule.component.css']
})
export class FlightOnewayScheduleComponent implements OnInit, OnChanges {

  @Input() from: string;
  @Input() to: string;
  @Output() sel = new EventEmitter<string>();
  flightSchedules: FlightSchedule[] = [];
  isHidden = [];
  buttonChange = [];
  changeStyle = false;
  data1: FlightSchedule = {
    id: 1,
    departureAirport: {
      id: 1,
      code: 'SGN',
      name: 'Tan San Nhat',
      city: 'Tp Ho Chi Minh'
    },
    departureDateTime: '14:00',
    arrivalAirport: {
      id: 2,
      code: 'HAN',
      name: 'Noi Bai',
      city: 'Ha Noi'
    },
    arrivalDateTime: '16:00',
    branch: 1,
    flightCode: 'VJ123',
    flightCapacity: 100,
    price: 900000
  }
  data2: FlightSchedule = {
    id: 1,
    departureAirport: {
      id: 1,
      code: 'SGN',
      name: 'Tan San Nhat',
      city: 'Tp Ho Chi Minh'
    },
    departureDateTime: '12:00',
    arrivalAirport: {
      id: 2,
      code: 'HAN',
      name: 'Noi Bai',
      city: 'Ha Noi'
    },
    arrivalDateTime: '14:00',
    branch: 1,
    flightCode: 'VJ412',
    flightCapacity: 100,
    price: 870000
  }
  data3: FlightSchedule = {
    id: 3,
    departureAirport: {
      id: 1,
      code: 'SGN',
      name: 'Tan San Nhat',
      city: 'Tp Ho Chi Minh'
    },
    departureDateTime: '20:00',
    arrivalAirport: {
      id: 2,
      code: 'HAN',
      name: 'Noi Bai',
      city: 'Ha Noi'
    },
    arrivalDateTime: '22:00',
    branch: 1,
    flightCode: 'VJ412',
    flightCapacity: 100,
    price: 870000
  }
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.flightSchedules.push(this.data1);
    this.flightSchedules.push(this.data2);
    this.flightSchedules.push(this.data3);
    for (let i = 0; i < this.flightSchedules.length; i++) {
      this.isHidden.push(true);
      this.buttonChange.push('Chọn')
    }
    console.log(this.from);
    console.log(this.to);
  }
  ngOnChanges() { }

  select(i) {
    if (this.buttonChange[i] == 'Chọn') {
      this.buttonChange[i] = 'Thay đổi';
      this.changeStyle = true;
      for (let index = 0; index < this.isHidden.length; index++) {
        if (index != i) {
          this.isHidden[index] = false;
        }
      }
    } else {
      this.buttonChange[i] = 'Chọn';
      this.changeStyle = false;
      for (let index = 0; index < this.isHidden.length; index++) {
        this.isHidden[index] = true;
      }

    }
  }

  detail() {
    this.modalService.open(FlightDetailComponent, { size: 'lg' });
  }
}

import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightDetailComponent } from '../flight-detail/flight-detail.component';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';
import { addDays } from 'date-fns'
import { FlightScheduleService } from 'src/app/shared/services/flight-schedule.service';
import { FlightSearchDTO } from 'src/app/shared/models/dto/flight-search-dto';
@Component({
  selector: 'app-flight-oneway-schedule',
  templateUrl: './flight-oneway-schedule.component.html',
  styleUrls: ['./flight-oneway-schedule.component.css']
})
export class FlightOnewayScheduleComponent implements OnInit, OnChanges {

  @Input() flightSearch: FlightSearchDTO;
  @Output() sel = new EventEmitter<FlightSchedule>();

  // Constant
  readonly DAY_OF_WEEK = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
  // display support properties
  branchImages: string[];
  isHidden = [];
  buttonChange = [];
  changeStyle = false;
  dateFlightString = new Array<string>(5);

  // binding properties
  flightSchedules: FlightSchedule[] = [];
  dateFlight = new Array<Date>(5);
  dateString: string;
  depString: string;
  arrString: string;

  data1: FlightSchedule = {
    id: 1,
    departureAirport: {
      id: 1,
      code: 'SGN',
      name: 'Tan San Nhat',
      city: 'Tp Ho Chi Minh'
    },
    departureDateTime: '2020-09-07 14:00',
    arrivalAirport: {
      id: 2,
      code: 'HAN',
      name: 'Noi Bai',
      city: 'Ha Noi'
    },
    arrivalDateTime: '2020-09-07 16:00',
    branch: { id: 1, name: 'vietject air' },
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
    departureDateTime: '2020-09-07 12:00',
    arrivalAirport: {
      id: 2,
      code: 'HAN',
      name: 'Noi Bai',
      city: 'Ha Noi'
    },
    arrivalDateTime: '2020-09-07 14:00',
    branch: { id: 3, name: 'vietject air' },
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
    departureDateTime: '2020-09-07 20:00',
    arrivalAirport: {
      id: 2,
      code: 'HAN',
      name: 'Noi Bai',
      city: 'Ha Noi'
    },
    arrivalDateTime: '2020-09-07 22:00',
    branch: { id: 2, name: 'vietject air' },
    flightCode: 'VJ412',
    flightCapacity: 100,
    price: 870000
  }
  constructor(
    private flightScheduleService: FlightScheduleService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.branchImages = this.flightScheduleService.branchImages;
    this.flightSchedules.push(this.data1);
    this.flightSchedules.push(this.data2);
    this.flightSchedules.push(this.data3);
    for (let i = 0; i < this.flightSchedules.length; i++) {
      this.isHidden.push(true);
      this.buttonChange.push('Chọn')
    }
    this.depString = `${this.flightSchedules[0].departureAirport.city}, Việt Nam (${this.flightSchedules[0].departureAirport.code}) `
    this.arrString = `${this.flightSchedules[0].arrivalAirport.city}, Việt Nam (${this.flightSchedules[0].arrivalAirport.code}) `
    this.setDate(this.flightSearch.depDate);
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
      this.sel.emit(this.flightSchedules[i]);
    } else {
      this.buttonChange[i] = 'Chọn';
      this.changeStyle = false;
      for (let index = 0; index < this.isHidden.length; index++) {
        this.isHidden[index] = true;
      }
      this.sel.emit(null);
    }
  }

  detail(i) {
    const modalRef = this.modalService.open(FlightDetailComponent, { size: 'lg' });
    modalRef.componentInstance.flightDetail = this.flightSchedules[i];
  }

  setDate(_date: Date) {
    for (let i = 0; i < this.dateFlight.length; i++) {
      let temp = addDays(new Date(_date), i);
      this.dateFlight[i] = temp;
      this.dateFlightString[i] = `${this.DAY_OF_WEEK[temp.getDay()]}(${temp.getDate()}/${temp.getMonth() + 1})`;
    }
  }
}

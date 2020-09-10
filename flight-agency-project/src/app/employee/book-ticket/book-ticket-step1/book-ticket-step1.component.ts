//Creator: Nguyễn Xuân Hùng
import { DataService } from './../../../shared/services/data.service';
import { EmployeeService } from './../../../shared/services/employee.service';
import { FlightSchedule } from './../../../shared/models/flight-schedule';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FlightSearchDTO } from './../../../shared/models/dto/FlightSearchDTO';


@Component({
  selector: 'app-book-ticket-step1',
  templateUrl: './book-ticket-step1.component.html',
  styleUrls: ['./book-ticket-step1.component.css']
})
export class BookTicketStep1Component implements OnInit {

  @Input() flight1 = {} as FlightSearchDTO;

  flightIds : number[] = []; 
  flight : FlightSearchDTO = {
    departurePlace: {
      id: 12,
      city: "Hà Nội",
      code: "he",
      name: "12",
  },
  departureDate: "2020-09-21",
  arrivalDate: "2020-09-21",
  arrivalPlace: {
    id: 1,
    city: "Hồ Chí Minh",
    code: "aaa",
    name: "sss",
},
  adult: 3,
  child: 2,
  baby: 0
  };
  backFlight = {} as FlightSearchDTO;
  @Input() ticketForm: FormGroup;
  twoWay: boolean = null;
  departureDates = [];
  arrivalDates = [];
  departureFlights = [] as FlightSchedule[];
  arrivalFlights = [] as FlightSchedule[];
  //Biến xét active class
  isButtonDepartureClick : number =3;
  isButtonArrivalClick : number =3;
  //Biến check list null
  isDeptFlightNull: boolean = false;
  isArvFlightNull: boolean = false;
  
  constructor(private employeeService: EmployeeService,
    private dataService:DataService) {
   }

  ngOnInit() {
    if(this.arrivalDates.length==0||this.departureDates.length==0){
      if(this.flight.arrivalDate!=""&&this.flight.arrivalDate!=null){
        this.arrivalDates= this.getWeekDays(this.flight.arrivalDate);
      }
      this.departureDates = this.getWeekDays(this.flight.departureDate);
    }
    
    //Gửi danh sách flightIds
    this.dataService.currentMessage.subscribe(data=> this.flightIds=data);

    //Tìm kiếm danh sách chuyến bay đi:
    this.employeeService.findAllFlightSchedules(this.flight).subscribe(data=>{
      this.departureFlights= data;
      if(this.departureFlights.length==0){
        this.isDeptFlightNull = true;
      }
      //Tìm kiếm chiều trở về
      if(this.flight.arrivalDate!=""&&this.flight.arrivalDate!=null){
        // this.backFlight = this.flight;
        this.backFlight.departurePlace = this.flight.arrivalPlace;
        this.backFlight.arrivalPlace = this.flight.departurePlace;
        this.backFlight.departureDate = this.flight.arrivalDate;
        this.employeeService.findAllFlightSchedules(this.backFlight).subscribe(data=>{
          this.arrivalFlights=data;
          if(this.arrivalFlights.length==0){
            this.isArvFlightNull = true;
          }
        })
      }
    })
  }

  //function lấy tên thứ
  getDayName(day:string):string {
    var days = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    var d = new Date(day);
    var dayName = days[d.getDay()];
    return dayName;
  }

  //function lấy 7 ngày
  getWeekDays(date: string): Date[]{
        var dates = [] as Date[];
        var i: number;
        var myDate =new Date(date);
        for(i=0;i<3;i++){
            var newDate = new Date(myDate.setDate(myDate.getDate()-1));
            dates.unshift(newDate);
        }
        myDate = new Date(date);
        dates.push(new Date(date));
        for(i=0;i<3;i++){
            var newDate = new Date(myDate.setDate(myDate.getDate()+1));
            dates.push(newDate);
        }
        return dates;
  }

  //function tìm kiếm chuyến bay đi khác theo ngày
  findDepartureFlightOfNewDate(day,index){
    this.isButtonDepartureClick = index;
    var newDate = new Date(day).toISOString().slice(0,10);
    this.flight.departureDate = newDate;
    this.ngOnInit();
  }

  //function tìm kiếm chuyến bay về theo ngày
  findArrivalFlightOfNewDate(day,index){
    this.isButtonArrivalClick = index;
    var newDate = new Date(day).toISOString().slice(0,10);
    this.backFlight.departureDate = newDate;
    this.ngOnInit();
  }

  //submit step1
  step1Submitted(){
    this.flightIds=[];
    this.flightIds.push(Number.parseInt(this.ticketForm.get('flightDetails').get('DeptFlightSchedule').value))
    if(this.flight.arrivalDate!=""&&this.flight.arrivalDate!=null){
      if(this.ticketForm.get('flightDetails').get('arvFlightSchedule').value){
        this.flightIds.push(Number.parseInt(this.ticketForm.get('flightDetails').get('arvFlightSchedule').value));
      }
    }
    this.dataService.changeData(this.flightIds);
    this.ticketForm.get('flightDetails').get('DeptFlightSchedule').markAsTouched();
    this.ticketForm.get('flightDetails').get('DeptFlightSchedule').updateValueAndValidity();
    this.ticketForm.get('flightDetails').get('arvFlightSchedule').markAsTouched();
    this.ticketForm.get('flightDetails').get('arvFlightSchedule').updateValueAndValidity();
  }
}

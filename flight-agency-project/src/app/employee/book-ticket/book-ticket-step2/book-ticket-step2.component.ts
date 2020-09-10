//Creator: Nguyễn Xuân Hùng
import { DataService } from './../../../shared/services/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FlightSearchDTO } from './../../../shared/models/dto/FlightSearchDTO';
import { TransactionPassengerDTO } from './../../../shared/models/dto/TransactionPassengerDTO';
import { PassengerDTO } from './../../../shared/models/dto/PassengerDTO';
import { TransactionDTO } from './../../../shared/models/dto/TransactionDTO';
import { Account } from './../../../shared/models/account';
import { EmployeeService } from './../../../shared/services/employee.service';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';

@Component({
  selector: 'app-book-ticket-step2',
  templateUrl: './book-ticket-step2.component.html',
  styleUrls: ['./book-ticket-step2.component.css']
})
export class BookTicketStep2Component implements OnInit {

  @Input() flight1 = {} as FlightSearchDTO;
  //Nhận biến flightID
  flightIds : number[];
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
  "arrivalDate": "2020-09-21",
  "adult": 2,
  "child": 2,
  "baby": 0
  }
  @Input() ticketForm: FormGroup;
  departureFlight={} as FlightSchedule;
  arrivalFlight={} as FlightSchedule;
  customer = {} as Account;
  emailCheck:string = "";
  totalPrice: number =0;
  transactionPassengerDTO ={} as TransactionPassengerDTO;
  passengers =[] as PassengerDTO[];
  transactions = [] as TransactionDTO[];
  deptTransaction={} as TransactionDTO;
  arvTransaction={} as TransactionDTO;

  constructor(private data:DataService,
              private employeeService:EmployeeService,
              private router:Router) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(data=>{
      this.flightIds=data;
      if(this.flightIds.length!=0){
        this.employeeService.findFlightById(this.flightIds[0]).subscribe(data=>{
          this.departureFlight=data;
          if(this.flightIds.length!=1){
            this.employeeService.findFlightById(this.flightIds[1]).subscribe(data=>{
              this.arrivalFlight = data;
            })
          }
        })
      }
    })
}

  //lặp số lượng
  counter(i:number){
    return new Array(i);
  }

  //Hàm kiểm tra email
  checkEmail(){
    this.emailCheck=""
    this.emailCheck = this.ticketForm.get('otherDetails').get('emailCheck').value;
    this.employeeService.checkAccountByEmail(this.emailCheck).subscribe(data=>{
      this.customer= data;
      this.emailCheck="Email hợp lệ";
    },error=>{
      this.emailCheck = "Không tìm thấy người dùng";
    })
  }

  //Cập nhật tổng tiền hành lý
  getTotalLuggagePrice():number{
    let luggagePrice = 0;
    let adultPassengers = this.ticketForm.get("adultPassengers") as FormArray;
    let childPassengers = this.ticketForm.get("childPassengers") as FormArray;
    for(let i=0;i<this.flight.adult;i++){
      luggagePrice+=adultPassengers.at(i).get('luggageWeight').value*1;
    }
    for(let i=0;i<this.flight.child;i++){
      luggagePrice+=childPassengers.at(i).get('luggageWeight').value*1;
    }
    return luggagePrice;
  }

  //cập nhật totalPrice
  changeTotalPrice(){
    let deptPrice = this.ticketForm.get('otherDetails').get('deptPrice').value;
    let arvPrice = this.ticketForm.get('otherDetails').get('arvPrice').value;
    let luggagePrice = this.getTotalLuggagePrice();
    this.totalPrice= Number.parseInt(deptPrice)+Number.parseInt(arvPrice)+luggagePrice;
  }


  //Lưu vé
  saveTicket(){
    
    //Lưu khách hàng
    let passenger = {} as PassengerDTO;
    let adultPassengers = this.ticketForm.get("adultPassengers") as FormArray;
    let childPassengers = this.ticketForm.get("childPassengers") as FormArray;
    for(let i=0;i<this.flight.adult;i++){
      passenger={
        id: null,
        fullName : adultPassengers.at(i).get("fullName").value,
        identifierCard: adultPassengers.at(i).get("identifierCard").value,
        email: adultPassengers.at(i).get("email").value,
        phoneNumber: adultPassengers.at(i).get("phoneNumber").value,
        gender: adultPassengers.at(i).get("gender").value,
        checkin: false
      }
      this.passengers.push(passenger);
    }
    for(let i=0;i<this.flight.child;i++){
      passenger={
        id: null,
        fullName : childPassengers.at(i).get("fullName").value,
        identifierCard: null,
        email: null,
        phoneNumber: childPassengers.at(i).get("phoneNumber").value,
        gender: childPassengers.at(i).get("gender").value,
        checkin: false
      }
      this.passengers.push(passenger);
    }
    
    //Lưu transaction
    //Chiều đi
    let createdTime = new DatePipe('vi-VN').transform(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", 'GMT+7');
    let due = new Date();
    due.setHours(due.getHours()+2); 
    let dueTime = new DatePipe('vi-VN').transform(due, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'", 'GMT+7');
    this.deptTransaction = {
      id: null,
      createdTime: createdTime,
      dueTime: dueTime,
      price: this.arvTransaction?this.ticketForm.get('otherDetails').get('deptPrice').value*1+this.getTotalLuggagePrice() : this.totalPrice,
      status: "Chờ thanh toán",
      account: this.customer as Account,
      flightSchedule: this.departureFlight,
    }
    this.transactions.push(this.deptTransaction);

    //Lưu chiều về
    if(this.arrivalFlight){
      this.arvTransaction = {
        id: null,
        createdTime: createdTime,
        dueTime: dueTime,
        price: this.ticketForm.get('otherDetails').get('arvPrice').value*1,
        status: "chưa thanh toán",
        account: this.customer as Account,
        flightSchedule: this.departureFlight,
      }
    }
    this.transactionPassengerDTO = {
      transactions: this.transactions,
      passengers: this.passengers
    }
    this.employeeService.saveTransactionAndPassenger(this.transactionPassengerDTO).subscribe(()=>{

    })
  }

  //router
  goToInvoicePage(){

  }
}

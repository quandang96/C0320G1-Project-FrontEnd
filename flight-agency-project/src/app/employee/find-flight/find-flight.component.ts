//BHung find-flight
import { Airport } from './../../shared/models/airport';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from './../../shared/services/employee.service';
import { FlightSearchDTO } from './../../shared/models/dto/FlightSearchDTO';


@Component({
  selector: 'app-find-flight',
  templateUrl: './find-flight.component.html',
  styleUrls: ['./find-flight.component.css']
})
export class FindFlightComponent implements OnInit {
  flightType: boolean = true;
  flight :FlightSearchDTO={
    departurePlace: null,
    arrivalPlace: null,
    departureDate: "",
    arrivalDate: "",
    adult: 0,
    child: 0,
    baby: 0
  };
  findFlightForm: FormGroup;
  airports = [] as Airport[];

  constructor(private router: Router,
              private fb: FormBuilder,
              private employeeService: EmployeeService) { }

  ngOnInit() {
    this.findFlightForm = this.fb.group({
      departurePlace : ['',[Validators.required]],
      arrivalPlace: ['',[Validators.required]],
      departureDate: ['',[Validators.required]],
      arrivalDate: ['',[]],
      adult: ['0',[Validators.min(1)]],
      child: ['0',[Validators.min(0)]],
      baby: ['0',[Validators.min(0)]]
    });

    //Lấy danh sách sân bay:
    this.employeeService.getAllAirports().subscribe(data=>{
      this.airports = data;
    });

  }

  changeFlightType(value){
    if(value=="Khứ hồi"){
      this.flightType=false;
    }else{
      this.flightType=true;
    }   
  }

  navigateBookTicketPage(){
    this.flight=this.findFlightForm.value;
    console.log(this.flight);
    this.router.navigateByUrl("/employee/bookTicket",{state : this.flight});
  }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  employeeInfoForm: FormGroup;

  constructor() {
    $('#basicModal').modal({show: false, backdrop: 'static'});
  }

  ngOnInit() {
  }

  submit() {}
}

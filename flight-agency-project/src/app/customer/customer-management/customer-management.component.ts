import { Component, OnInit } from '@angular/core';
import {listCustomerDto} from '../../shared/models/dto/listCustomerDto';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  customer: listCustomerDto;

  constructor() { }

  ngOnInit() {
  }

}

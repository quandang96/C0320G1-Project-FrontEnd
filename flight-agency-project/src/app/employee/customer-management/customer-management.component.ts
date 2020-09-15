import {Component, OnInit} from '@angular/core';
import {listCustomerDto} from '../../shared/models/dto/listCustomerDto';
import {CustomerServiceService} from '../../shared/services/customer-service.service';
import {Observable, Subscription} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-management',
  templateUrl: './customer-management.component.html',
  styleUrls: ['./customer-management.component.css']
})
export class CustomerManagementComponent implements OnInit {
  currentPage: number;
  pageSize: number;
  totalElements: number;
  private customerList: Observable<listCustomerDto[]>;
  stt: number[];
  customers: listCustomerDto[];
  isEmpty = false;

  constructor(public customerService: CustomerServiceService) {
  }

  ngOnInit() {
    this.getAllCustomer();
    this.getPage(1);
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe(value =>
      (data: listCustomerDto[]) => this.customers = data);
  }

  getPage(pageNumber) {
    // @ts-ignore
    this.customerList = this.customerService.getPage(pageNumber).pipe(
      tap(res => {
        console.log(res);
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.stt = [];
        const firstIndex = this.pageSize * (this.currentPage - 1) + 1;
        const lastIndeex = this.pageSize * this.currentPage;
        for (let i = firstIndex; i <= lastIndeex; i++) {
          this.stt.push(i);
        }

        this.isEmpty = false;
        if (res.content.length === 0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
      }),
      map(res => res.content)
    );
  }


}

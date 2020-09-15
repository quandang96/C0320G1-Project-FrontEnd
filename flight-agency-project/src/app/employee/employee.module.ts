import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {BookTicketComponent} from './book-ticket/book-ticket.component';
import {MatStepperModule} from '@angular/material';
import {BookTicketStep1Component} from './book-ticket/book-ticket-step1/book-ticket-step1.component';
import {BookTicketStep2Component} from './book-ticket/book-ticket-step2/book-ticket-step2.component';
import {BookTicketStep3Component} from './book-ticket/book-ticket-step3/book-ticket-step3.component';
import {FindFlightComponent} from './find-flight/find-flight.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    BookTicketComponent,
    BookTicketStep1Component,
    BookTicketStep2Component,
    BookTicketStep3Component,
    FindFlightComponent,
    EmployeeInformationComponent,
    EmployeeHomeComponent,
    CustomerManagementComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule {
}

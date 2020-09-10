import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MatStepperModule } from '@angular/material';
import { BookTicketStep1Component } from './book-ticket/book-ticket-step1/book-ticket-step1.component';
import { BookTicketStep2Component } from './book-ticket/book-ticket-step2/book-ticket-step2.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InvoiceTicketComponent } from './invoice-ticket/invoice-ticket.component';
import {registerLocaleData} from '@angular/common';
import localVi from '@angular/common/locales/vi'


registerLocaleData(localVi);
@NgModule({
  declarations: [BookTicketComponent, BookTicketStep1Component, BookTicketStep2Component, FindFlightComponent, InvoiceTicketComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }

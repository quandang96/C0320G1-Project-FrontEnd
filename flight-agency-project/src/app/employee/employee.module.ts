import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { MatStepperModule } from '@angular/material';
import { BookTicketStep1Component } from './book-ticket/book-ticket-step1/book-ticket-step1.component';
import { BookTicketStep2Component } from './book-ticket/book-ticket-step2/book-ticket-step2.component';
import { BookTicketStep3Component } from './book-ticket/book-ticket-step3/book-ticket-step3.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromoEditComponent } from './promo/promo-edit/promo-edit.component';

import { PromoListComponent } from './promo/promo-list/promo-list.component';



@NgModule({
  declarations: [BookTicketComponent, BookTicketStep1Component, BookTicketStep2Component, BookTicketStep3Component, FindFlightComponent, PromoEditComponent, PromoListComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }

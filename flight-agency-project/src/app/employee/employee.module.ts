import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { BillListComponent } from './../employee/bill-list/bill-list.component';
import { MaterialModule } from './../material.module';
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
import { registerLocaleData } from '@angular/common';
import localVi from '@angular/common/locales/vi'
import { NgxPaginationModule } from 'ngx-pagination';
import { BillFindComponent } from './bill-find/bill-find.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromoCreateComponent } from './promo/promo-create/promo-create.component';
import {EmployeeInformationComponent} from './employee-information/employee-information.component';
import {EmployeeHomeComponent} from './employee-home/employee-home.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';


registerLocaleData(localVi);
@NgModule({
  declarations: [
    BookTicketComponent,
    BookTicketStep1Component,
    BookTicketStep2Component,
    FindFlightComponent,
    InvoiceTicketComponent,
    BillFindComponent,
    BillListComponent,
    BillInvoiceComponent,
    PromoListComponent,
    PromoCreateComponent,
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
    NgxPaginationModule,
    CommonModule,
    MaterialModule,



  ],
  entryComponents: [BillFindComponent]

})
export class EmployeeModule {
}

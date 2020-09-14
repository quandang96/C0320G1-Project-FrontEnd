import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PDFExportModule } from './../../../node_modules/@progress/kendo-angular-pdf-export';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DealRecordComponent } from './deal-record/deal-record.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { PaidDealsComponent } from './paid-deals/paid-deals.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { CustomerPasswordComponent } from './customer-password/customer-password.component';



@NgModule({
  declarations: [CustomerHomeComponent, CustomerHomeComponent, DealRecordComponent, BillListComponent, PaidDealsComponent, CustomerInfoComponent, CustomerPaymentComponent, CustomerPasswordComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    PDFExportModule


  ],
  providers: [],
  bootstrap: []
})
export class CustomerModule { }

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { BillFindComponent } from './bill-find/bill-find.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [BillListComponent, BillInvoiceComponent, BillFindComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgxPaginationModule

   
  ]
  
})
export class EmployeeModule { }

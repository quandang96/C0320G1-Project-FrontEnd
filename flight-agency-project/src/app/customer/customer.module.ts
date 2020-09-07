import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { DealRecordComponent } from './deal-record/deal-record.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { PaidDealsComponent } from './paid-deals/paid-deals.component';


@NgModule({
  declarations: [CustomerHomeComponent, CustomerHomeComponent, DealRecordComponent, BillListComponent, PaidDealsComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  providers: [],
  bootstrap : []
})
export class CustomerModule { }

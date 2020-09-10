import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerManagementComponent } from './customer-management/customer-management.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [CustomerManagementComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        NgxPaginationModule
    ]
})
export class CustomerModule { }

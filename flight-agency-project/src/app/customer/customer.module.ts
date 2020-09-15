import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';
import {CustomerPaymentComponent} from './customer-payment/customer-payment.component';
import {CustomerPasswordComponent} from './customer-password/customer-password.component';


@NgModule({
  declarations: [
    CustomerInfoComponent,
    CustomerHomeComponent,
    CustomerPaymentComponent,
    CustomerPasswordComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPaginationModule
  ]
})
export class CustomerModule {
}

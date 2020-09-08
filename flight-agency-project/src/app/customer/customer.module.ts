import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxPayPalModule} from 'ngx-paypal';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerPaymentComponent} from './customer-payment/customer-payment.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';

@NgModule({
  declarations: [CustomerPaymentComponent, CustomerHomeComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    NgxPayPalModule
  ]
})
export class CustomerModule {
}

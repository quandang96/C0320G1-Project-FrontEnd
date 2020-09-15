import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import {CustomerPaymentComponent} from './customer-payment/customer-payment.component';
import { CustomerPasswordComponent } from './customer-password/customer-password.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [CustomerInfoComponent, CustomerHomeComponent , CustomerPaymentComponent, CustomerPasswordComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class CustomerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';


@NgModule({
  declarations: [CustomerInfoComponent, CustomerHomeComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }

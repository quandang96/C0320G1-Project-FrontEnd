import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerPaymentComponent} from './customer-payment/customer-payment.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {CustomerPasswordComponent} from './customer-password/customer-password.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';



const routes: Routes = [
  {
    path: '', component: CustomerHomeComponent, children: [
      {path: 'payment', component: CustomerPaymentComponent},
      {path: 'info', component: CustomerInfoComponent },
      {path: 'change-password', component: CustomerPasswordComponent },
      { path: 'management', component: CustomerManagementComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}

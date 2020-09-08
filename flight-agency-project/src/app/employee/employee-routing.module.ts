import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeCustomerCheckinComponent} from './employee-customer-checkin/employee-customer-checkin.component';


const routes: Routes = [
  {path: 'customer-checkin-list', component: EmployeeCustomerCheckinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeCustomerCheckinComponent} from './employee-customer-checkin/employee-customer-checkin.component';


const routes: Routes = [
  {path: 'customer-checkin-list', component: EmployeeCustomerCheckinComponent},
  {path: 'bookTicket', component: BookTicketComponent},
  {path: 'findFlight', component: FindFlightComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

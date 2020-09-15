import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeTableComponent} from './employee-table/employee-table.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: 'bookTicket', component: BookTicketComponent},
    {path: '', component: EmployeeTableComponent},
    {path: 'findFlight', component: FindFlightComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

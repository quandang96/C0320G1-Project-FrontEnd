import { EmployeeComponent } from './employee.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"",component:EmployeeComponent,
    children: [
      {path:"bookTicket",component: BookTicketComponent},
      {path:"findFlight",component:FindFlightComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

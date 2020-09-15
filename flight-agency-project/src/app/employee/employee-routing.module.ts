import { InvoiceTicketComponent } from './invoice-ticket/invoice-ticket.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';


const routes: Routes = [
  {
    path: "bookTicket", component: BookTicketComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: "findFlight", component: FindFlightComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: "transaction/invoice/:id", component: InvoiceTicketComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

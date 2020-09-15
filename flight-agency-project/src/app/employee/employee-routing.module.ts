import { InvoiceTicketComponent } from './invoice-ticket/invoice-ticket.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { BillListComponent } from '../customer/bill-list/bill-list.component';
import { BillFindComponent } from './bill-find/bill-find.component';


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
  },

  { path: "bill-list", component: BillListComponent },
  { path: "bill-invoice", component: BillInvoiceComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  entryComponents: [BillFindComponent]
})
export class EmployeeRoutingModule { }

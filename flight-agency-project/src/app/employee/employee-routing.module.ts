import { InvoiceTicketComponent } from './invoice-ticket/invoice-ticket.component';
import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { BillListComponent } from '../employee/bill-list/bill-list.component';
import { BillFindComponent } from './bill-find/bill-find.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';
import { PromoCreateComponent } from './promo/promo-create/promo-create.component';
import { EmployeeCustomerCheckinComponent } from './employee-customer-checkin/employee-customer-checkin.component';


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

  {
    path: "bill-list", component: BillListComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  {
    path: "bill-invoice", component: BillInvoiceComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_EMPLOYEE'
    }
  },
  { path: "promotion", component: PromoListComponent },
  { path: "promotion/create", component: PromoCreateComponent },
  { path: 'customer-checkin-list', component: EmployeeCustomerCheckinComponent },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class EmployeeRoutingModule { }

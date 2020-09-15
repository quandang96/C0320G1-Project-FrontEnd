import {FindFlightComponent} from './find-flight/find-flight.component';
import {BookTicketComponent} from './book-ticket/book-ticket.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeInformationComponent} from './employee-information/employee-information.component';
import {EmployeeHomeComponent} from './employee-home/employee-home.component';
import {CustomerManagementComponent} from './customer-management/customer-management.component';


const routes: Routes = [
  {
    path: '', component: EmployeeHomeComponent,
    children: [
      // creator Trương Khánh Mậu
      {path: 'employeeInfo', component: EmployeeInformationComponent},
      { path: 'management', component: CustomerManagementComponent }
    ],
  },
  {path: 'bookTicket', component: BookTicketComponent},
  {path: 'findFlight', component: FindFlightComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}

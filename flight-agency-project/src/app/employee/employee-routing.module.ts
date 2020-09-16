import {FindFlightComponent} from './find-flight/find-flight.component';
import {BookTicketComponent} from './book-ticket/book-ticket.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AddPassengerComponent} from "./add-passenger/add-passenger.component";
import {UpdatePassengerComponent} from "./update-passenger/update-passenger.component";
import {ListPassengerComponent} from "./list-passenger/list-passenger.component";



const routes: Routes = [
  {path: "bookTicket", component: BookTicketComponent},
  {path: "findFlight", component: FindFlightComponent},
  {path: "add-passenger", component: AddPassengerComponent},
  {path: "list-passenger/update/:id", component: UpdatePassengerComponent},
  {path: "list-passenger", component: ListPassengerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule {
}

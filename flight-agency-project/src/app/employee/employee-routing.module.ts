import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PromoListComponent} from './promo/promo-list/promo-list.component';
import {PromoCreateComponent} from './promo/promo-create/promo-create.component';

const routes: Routes = [
    {path:"bookTicket",component: BookTicketComponent},
    {path:"findFlight",component:FindFlightComponent},
    {path:"promotion",component:PromoListComponent},
    {path:"promotion/create",component:PromoCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

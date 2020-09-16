import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoEditComponent } from './promo/promo-edit/promo-edit.component';
import { PromoListComponent } from './promo/promo-list/promo-list.component';



const routes: Routes = [
    {path:"bookTicket",component: BookTicketComponent},
    {path:"findFlight",component:FindFlightComponent},
    {path:'promotion/promo-edit/:id',component: PromoEditComponent},
    {path:"promotion",component:PromoListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

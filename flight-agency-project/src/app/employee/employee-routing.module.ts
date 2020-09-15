import { FindFlightComponent } from './find-flight/find-flight.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromoEditComponent } from './promo/promo-edit/promo-edit.component';
import { PromoDeleteComponent } from './promo/promo-delete/promo-delete.component';



const routes: Routes = [
    {path:"bookTicket",component: BookTicketComponent},
    {path:"findFlight",component:FindFlightComponent},
    {path:'promotion/promo-edit/:id',component: PromoEditComponent},
    {path:'promotion/promo-delete/:id',component: PromoDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

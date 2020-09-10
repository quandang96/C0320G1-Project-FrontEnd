import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightScheduleListComponent } from './flight-schedule-list/flight-schedule-list.component';
import {ReservationComponent} from './reservation/reservation.component';
import { ReservationDetailComponent } from './reservation-detail/reservation-detail.component';


const routes: Routes = [{
  path: '',
  component: FlightCenterComponent,
  children: [
    { path: 'schedule', component: FlightScheduleListComponent },
    { path: 'reservation', component: ReservationComponent},
    { path: 'reservation/:id', component: ReservationDetailComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightScheduleListComponent } from './flight-schedule-list/flight-schedule-list.component';


const routes: Routes = [{
  path: '',
  component: FlightCenterComponent,
  children: [
    { path: 'schedule', component: FlightScheduleListComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }

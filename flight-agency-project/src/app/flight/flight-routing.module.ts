import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightScheduleListComponent } from './flight-schedule-list/flight-schedule-list.component';
import { AirportResolverService } from './airport-resolver.service';
import { FlightPassengerInfoComponent } from './flight-passenger-info/flight-passenger-info.component';
import { RoleGuard } from '../guards/role.guard';
import { FlightGuardGuard } from './flight-guard.guard';


const routes: Routes = [{
  path: '',
  component: FlightCenterComponent,
  data: {
    expectedRole: 'ROLE_USER'
  },
  canActivate: [RoleGuard],
  children: [
    { path: 'schedule', component: FlightScheduleListComponent, resolve: { airports: AirportResolverService } },
    { path: 'confirm', component: FlightPassengerInfoComponent, canActivate: [FlightGuardGuard] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }

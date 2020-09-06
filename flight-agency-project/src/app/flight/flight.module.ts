import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightScheduleListComponent } from './flight-schedule-list/flight-schedule-list.component';
import { FlightBookingDetailComponent } from './flight-booking-detail/flight-booking-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightOnewayScheduleComponent } from './flight-oneway-schedule/flight-oneway-schedule.component';

@NgModule({
  declarations: [FlightCenterComponent, FlightScheduleListComponent, FlightBookingDetailComponent, FlightOnewayScheduleComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    NgbModule
  ],
  entryComponents: [FlightBookingDetailComponent]
})
export class FlightModule { }

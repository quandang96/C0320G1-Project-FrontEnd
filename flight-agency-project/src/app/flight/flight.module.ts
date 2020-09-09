import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightRoutingModule } from './flight-routing.module';
import { FlightCenterComponent } from './flight-center/flight-center.component';
import { FlightScheduleListComponent } from './flight-schedule-list/flight-schedule-list.component';
import { FlightBookingDetailComponent } from './flight-booking-detail/flight-booking-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightOnewayScheduleComponent } from './flight-oneway-schedule/flight-oneway-schedule.component';
import { OnewayDirective } from './oneway.directive';
import { FlightDetailComponent } from './flight-detail/flight-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightPassengerInfoComponent } from './flight-passenger-info/flight-passenger-info.component';

@NgModule({
  declarations: [FlightCenterComponent, FlightScheduleListComponent, FlightBookingDetailComponent, FlightOnewayScheduleComponent, OnewayDirective, FlightDetailComponent, FlightPassengerInfoComponent],
  imports: [
    CommonModule,
    FlightRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  entryComponents: [FlightBookingDetailComponent, FlightOnewayScheduleComponent, FlightDetailComponent]
})
export class FlightModule { }

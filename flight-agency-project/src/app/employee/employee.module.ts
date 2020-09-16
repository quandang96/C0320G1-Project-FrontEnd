import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EmployeeRoutingModule} from './employee-routing.module';
import {BookTicketComponent} from './book-ticket/book-ticket.component';
import {MatStepperModule} from '@angular/material';
import {BookTicketStep1Component} from './book-ticket/book-ticket-step1/book-ticket-step1.component';
import {BookTicketStep2Component} from './book-ticket/book-ticket-step2/book-ticket-step2.component';
import {BookTicketStep3Component} from './book-ticket/book-ticket-step3/book-ticket-step3.component';
import {FindFlightComponent} from './find-flight/find-flight.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeTableComponent} from './employee-table/employee-table.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [BookTicketComponent, BookTicketStep1Component, BookTicketStep2Component, BookTicketStep3Component, FindFlightComponent, EmployeeListComponent, EmployeeTableComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ]
})
export class EmployeeModule {
}

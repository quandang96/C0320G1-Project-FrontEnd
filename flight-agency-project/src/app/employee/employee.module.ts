import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [EmployeeInformationComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }

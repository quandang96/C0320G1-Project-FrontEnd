import { SendFeedbackComponent } from './home/send-feedback/send-feedback.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'send-feedback', component: SendFeedbackComponent
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: 'employee', loadChildren: () => import('./employee/employee.module').then(mod => mod.EmployeeModule)
  },
  {
    path: 'customer', loadChildren: () => import('./customer/customer.module').then(mod => mod.CustomerModule)
  },
  {
    path: 'flight', loadChildren: () => import('./flight/flight.module').then(mod => mod.FlightModule)
  },
  {
    path: 'passenger', loadChildren: () => import('./passenger/passenger.module').then(mod => mod.PassengerModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

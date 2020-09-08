import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCheckinComponent} from './customer-checkin/customer-checkin.component';


const routes: Routes = [
  { path: 'checkin', component: CustomerCheckinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

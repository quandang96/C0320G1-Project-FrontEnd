import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerInfoComponent} from './customer-info/customer-info.component';
import {CustomerHomeComponent} from './customer-home/customer-home.component';


const routes: Routes = [
  {
    path: '', component: CustomerHomeComponent, children: [
      {path: 'info', component: CustomerInfoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

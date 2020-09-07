import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerManagementComponent} from './customer-management/customer-management.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // creator Trương Khánh Mậu
      { path: 'management', component: CustomerManagementComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

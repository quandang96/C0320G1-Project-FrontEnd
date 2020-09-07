import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeInformationComponent} from './employee-information/employee-information.component';


const routes: Routes = [
  {
    path: '',
    children: [
      // creator Trương Khánh Mậu
      { path: 'employeeInfo', component: EmployeeInformationComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

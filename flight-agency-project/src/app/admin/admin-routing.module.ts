import { AdminHomeComponent } from './admin-home/admin-home.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { RoleGuard } from '../guards/role.guard';
import { ReportComponent } from './report/report.component';


const routes: Routes = [

  {
    path : '',component : AdminHomeComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_ADMIN'
    },children : [
      {
        path: 'report', component: ReportComponent
      },
      {
        path: 'feedback-list', component: FeedbackListComponent
      }
    ]
    
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

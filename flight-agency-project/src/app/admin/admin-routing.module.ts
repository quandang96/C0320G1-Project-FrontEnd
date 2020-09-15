import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FeedbackListComponent} from './feedback-list/feedback-list.component';
import {AdminGuard} from '../guards/admin.guard';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';


// const routes: Routes = [
//   { path: 'feedback-list', component: FeedbackListComponent },
// ];

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    children: [
      {path: 'feedback-list', component: FeedbackListComponent },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

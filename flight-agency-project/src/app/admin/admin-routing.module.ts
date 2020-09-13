import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';


const routes: Routes = [
  // canActivate: [RoleGuard], 
  //   data: { 
  //     expectedRole: 'ROLE_ADMIN'
  //   } 
  { path: 'feedback-list', component: FeedbackListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

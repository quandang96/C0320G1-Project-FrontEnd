import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { RoleGuard } from '../guards/role.guard';


const routes: Routes = [

  {
    path: 'feedback-list', component: FeedbackListComponent, canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_ADMIN'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

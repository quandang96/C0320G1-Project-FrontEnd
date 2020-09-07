import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { PromoEditComponent } from './promo-edit/promo-edit.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from '../guards/admin.guard';


const routes: Routes = [
  {
    path: "", component: AdminDashboardComponent, canActivate: [AdminGuard],
    children: [
      {
        path: "promo-edit",
        component: PromoEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

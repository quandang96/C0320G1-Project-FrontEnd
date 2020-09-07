import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PromoEditComponent } from './promo-edit/promo-edit.component';
import { PromoDeleteComponent } from './promo-delete/promo-delete.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [PromoEditComponent, PromoDeleteComponent, AdminDashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

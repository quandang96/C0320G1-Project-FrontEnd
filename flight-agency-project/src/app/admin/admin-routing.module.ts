import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminInfoComponent} from './admin-info/admin-info.component';


const routes: Routes = [
  {
    path: 'admin' , children: [
      {path: 'info', component: AdminInfoComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

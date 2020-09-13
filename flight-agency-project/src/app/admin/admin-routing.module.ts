import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminHomeComponent} from './admin-home/admin-home.component';
import {AdminInfoComponent} from './admin-info/admin-info.component';
import {PasswordComponent} from './password/password.component';



const routes: Routes = [
  {
    path: '', component: AdminHomeComponent, children: [
      {path: 'info', component: AdminInfoComponent },
      {path: 'password', component: PasswordComponent}
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

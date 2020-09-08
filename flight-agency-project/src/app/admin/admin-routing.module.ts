import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // canActivate: [RoleGuard], 
  //   data: { 
  //     expectedRole: 'ROLE_ADMIN'
  //   } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

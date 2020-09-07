import { BillListComponent } from './bill-list/bill-list.component';
import { PaidDealsComponent } from './paid-deals/paid-deals.component';
import { DealRecordComponent } from './deal-record/deal-record.component';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [ 
  {path: "", component: CustomerHomeComponent, children: [
    {path: "deals", component: DealRecordComponent},
    {path: "paid-deals", component: PaidDealsComponent},
    {path: "bills", component: BillListComponent}
  ]},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

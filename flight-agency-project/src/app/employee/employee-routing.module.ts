import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillInvoiceComponent } from './bill-invoice/bill-invoice.component';
import { BillFindComponent } from './bill-find/bill-find.component';



const routes: Routes = [
  {path:"bill-list", component: BillListComponent},
  {path:"bill-invoice", component: BillInvoiceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [],
  entryComponents: [BillFindComponent]
})
export class EmployeeRoutingModule { }

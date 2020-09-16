import { NgModule } from '@angular/core';
import {DeleteTicketComponent} from './delete-ticket/delete-ticket.component';
import { AlterComponent } from './alter/alter.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {ListTicketComponent} from './list-ticket/list-ticket.component';
import {TicketRoutingModule} from './ticket-routing.module';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    ListTicketComponent,
    DeleteTicketComponent,
    AlterComponent
  ],
  imports: [
    TicketRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    TranslateModule
  ],
  entryComponents: [
    DeleteTicketComponent,
    AlterComponent
  ]
})
export class TicketModule { }

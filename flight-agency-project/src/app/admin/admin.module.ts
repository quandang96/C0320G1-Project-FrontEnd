import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FeedbackContentDialogComponent } from './feedback-content-dialog/feedback-content-dialog.component';
import { MaterialModule } from '../material.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FeedbackListComponent, FeedbackContentDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [FeedbackContentDialogComponent],
})
export class AdminModule { }

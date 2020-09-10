import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatNativeDateModule,
  MatFormFieldModule,
  MatInputModule,
  MatButton,
  MatButtonModule,
  MatDialogModule,} from '@angular/material';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BillFindComponent } from './employee/bill-find/bill-find.component';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  exports: [
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,
    MatDatepickerModule,
    MatDialogModule
  ],
  providers: [ ],

})

export class MaterialModule {}

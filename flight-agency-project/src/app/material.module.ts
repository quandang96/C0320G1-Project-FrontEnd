import { NgModule } from '@angular/core';
import { MatDatepickerModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatNativeDateModule} from "@angular/material/core";
import {MatDialogModule} from "@angular/material/dialog";
import {CircleChartComponent} from "./admin/circle-chart/circle-chart.component";


@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
  ],
  entryComponents: []
})

export class MaterialModule {}

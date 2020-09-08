import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReportComponent } from './report/report.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import {MaterialModule} from "../material.module";
import {ReactiveFormsModule} from "@angular/forms";
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';


@NgModule({
  declarations: [ReportComponent, CircleChartComponent, LineChartComponent, BarChartComponent, PieChartComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  entryComponents: [CircleChartComponent, LineChartComponent, BarChartComponent, PieChartComponent]
})
export class AdminModule { }

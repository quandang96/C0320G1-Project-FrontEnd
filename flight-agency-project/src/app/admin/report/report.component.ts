import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {CircleChartComponent} from "../circle-chart/circle-chart.component";
import {FormBuilder, FormGroup} from "@angular/forms";
import {LineChartComponent} from "../line-chart/line-chart.component";
import {PieChartComponent} from "../pie-chart/pie-chart.component";
import {BarChartComponent} from "../bar-chart/bar-chart.component";


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  private createReportForm: FormGroup;

  constructor(private dialog: MatDialog,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createReportForm = this.fb.group({
    chart: ['']
    });
  }

  openDialog(): void {
    switch (this.createReportForm.get('chart').value) {
      case '1':
        const dialogRef = this.dialog.open(CircleChartComponent, {
          width: '750px',
          data: {data1: 'aaa'}
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      case '2':
        const dialogRef1 = this.dialog.open(LineChartComponent, {
          width: '750px',
          data: {data1: 'aaa'}
        });

        dialogRef1.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      case '3':
        const dialogRef2 = this.dialog.open(PieChartComponent, {
          width: '750px',
          data: {data1: 'aaa'}
        });

        dialogRef2.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      case '4':
        const dialogRef3 = this.dialog.open(BarChartComponent, {
          width: '750px',
          data: {data1: 'aaa'}
        });

        dialogRef3.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
    }
  }

  onSubmit() {
    this.openDialog();
  }
}

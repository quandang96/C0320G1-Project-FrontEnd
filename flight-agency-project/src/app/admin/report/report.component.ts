import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {CircleChartComponent} from '../circle-chart/circle-chart.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LineChartComponent} from '../line-chart/line-chart.component';
import {PieChartComponent} from '../pie-chart/pie-chart.component';
import {BarChartComponent} from '../bar-chart/bar-chart.component';
import {ReportService} from '../../shared/services/report.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  // Thành
  newReport: any;
  private createReportForm: FormGroup;

  constructor(private dialog: MatDialog,
              private fb: FormBuilder,
              private reportService: ReportService) {
  }

  ngOnInit() {
    this.createReportForm = this.fb.group({
      chart: [''],
      date1: [''],
      date2: ['']
    });
  }

  openDialog(): void {
    switch (this.createReportForm.get('chart').value) {
      case '1':
        const dialogRef = this.dialog.open(CircleChartComponent, {
          height: '600px',
          width: '750px',
          data: {data1: 'aaa'},
          disableClose: true
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      case '2':
        const dialogRef1 = this.dialog.open(LineChartComponent, {
          height: '600px',
          width: '750px',
          data: {data1: 'aaa'},
          disableClose: true
        });

        dialogRef1.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      case '3':
        const dialogRef2 = this.dialog.open(PieChartComponent, {
          height: '600px',
          width: '750px',
          data: {data1: 'aaa'},
          disableClose: true
        });

        dialogRef2.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
      case '4':
        const dialogRef3 = this.dialog.open(BarChartComponent, {
          height: '600px',
          width: '750px',
          data: {data1: 'aaa'},
          disableClose: true
        });

        dialogRef3.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
        break;
    }
  }

  onSubmit() {

    this.newReport = {
      date1: this.createReportForm.value.date1,
      date2: this.createReportForm.value.date2
    };
    this.reportService.getAllReport(this.newReport).subscribe(
      data => {
        this.openDialog();
        console.log(data);
    });
  }
}

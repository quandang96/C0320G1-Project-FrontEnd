import {Component, Inject, OnInit} from '@angular/core';
import {Chart} from 'node_modules/chart.js';
import {Workbook} from "@syncfusion/ej2-excel-export";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  // Thành
  constructor(
    public dialogRef: MatDialogRef<LineChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  x = [];
  y = [];
  lineChart = [];
  total = 0;
  total1 = 0;

  ngOnInit() {
    if (this.data.data4 == null) {
      this.x.push(this.data.data3.date1 + ' - ' + this.data.data3.date2);
    } else {
      this.x.push(this.data.data3.date1 + ' - ' + this.data.data3.date2, this.data.data4.date1 + ' - ' + this.data.data4.date2);
    }
    if (this.data.data2 == null) {
      this.data.data1.forEach( x => {
        this.total += x.total;
      });
      this.y.push(this.total);
    } else {
      this.data.data1.forEach( x => {
        this.total += x.total;
      });
      this.data.data2.forEach( x => {
        this.total1 += x.total;
      });
      this.y.push(this.total, this.total1);
    }

    this.lineChart = new Chart('myChart', {
      type: 'line',
      data: {
        labels: this.x,
        datasets: [{
          label: 'Doanh thu theo khoảng ngày',
          data: this.y,
          backgroundColor: [
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  public Export = () => {
    const rowDatas: object[] = [];

    rowDatas.push({
      index: 1,
      cells: [
        {
          index: 1, value: '<b>Ngày</b>'
        },
        {
          index: 2, value: '<b>Doanh thu</b>'
        }
      ]
    });
    // tslint:disable-next-line:ban-types
    for (let i = 0; i < this.data.data1.length; i++) {
      rowDatas.push({
        index: 2 + i,
        cells:
          [
            { index: 1, value: this.data.data[i].date },
            { index: 2, value: this.data.data1[i].total },

          ]
      });
    }
    rowDatas.push({
      index: this.data.data1.length + 2,
      cells:
        [
          {index: 1, value: '<b>Tổng</b>' },
          {index: 2, value:  this.total}
        ]
    });
    if (this.data.data2 != null) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.data.data2.length; i++) {
        rowDatas.push({
          index: this.data.data1.length + 3 + i,
          cells:
            [
              { index: 1, value: this.data.data2[i].date},
              { index: 2, value: this.data.data2[i].total },

            ]
        });
      }
      rowDatas.push({
        index: this.data.data1.length + this.data.data2.length + 3,
        cells:
          [
            {index: 1, value: '<b>Tổng</b>' },
            {index: 2, value:  this.total1}
          ]
      });
    }

    const book: Workbook = new Workbook({
      worksheets: [
        {
          rows: rowDatas
        }
      ],

    }, 'xlsx');
    book.save('ChartExport.xlsx');
  }
}

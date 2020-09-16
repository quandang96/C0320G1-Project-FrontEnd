import { Component, OnInit } from '@angular/core';
import {jsPDF} from "jspdf"
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-bill-invoice',
  templateUrl: './bill-invoice.component.html',
  styleUrls: ['./bill-invoice.component.css']
})
export class BillInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public convertToPDF()
  {
  var data = document.getElementById('containerConvert');
  html2canvas(data).then(canvas => {
  // Few necessary setting options
  var imgWidth = 208;
  var pageHeight = 295;
  var imgHeight = canvas.height * imgWidth / canvas.width;
  var heightLeft = imgHeight;
   
  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
  pdf.save('bill.pdf'); // Generated PDF
  });
  }

}

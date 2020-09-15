import { Page } from './../../shared/models/page';
import { Bill } from '../../shared/models/bill';
import { Observable } from 'rxjs';
import { BillFindComponent } from './../bill-find/bill-find.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BillService} from "../../shared/services/bills.service"
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  billsList: Bill[];




  constructor(public dialog: MatDialog,
              private billsService: BillService
    ) { }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(BillFindComponent, {
      width: '900px',
      data: {billList: this.billsList}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  loadBillsList(){
    this.billsService.getBillsList().subscribe(data => this.billsList = data.content)
  }

  ngOnInit() {
    this.loadBillsList();
  }

}

import { BillService } from './../../shared/services/bill.service';
import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/shared/models/bill';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

declare var $: any
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
// C-Ngan
export class BillListComponent implements OnInit {  

  private bills: Observable<Bill[]>;
  private totalElements: number;
  private pageSize: number;
  private currentPage: number;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.getPage(1);
  $(document).ready(function(){
      $("#checkAll").click(function () {
          $('input:checkbox').not(this).prop('checked', this.checked);
      }); 
  });
  
  }

  getPage(page: number){       
    this.bills = this.billService.getBillsByAccountId(1, page).pipe(
      tap(res => {                
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = page;
      }),
      map( res => res.content)
    )   
    $(document).ready(function(){
      $("#checkAll").click(function () {
        // let checkbox = $("#checkAll").attr('checked');        
          $('input:checkbox').not(this).prop('checked', this.checked);
      }); 
  })
  
}
}

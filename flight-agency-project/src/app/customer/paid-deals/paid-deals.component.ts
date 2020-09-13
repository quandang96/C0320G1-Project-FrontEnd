import { SelectDto } from './../../shared/models/dto/SelectDto';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { BillService } from './../../shared/services/bill.service';
import { TransactionService } from 'src/app/shared/services/transaction.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bill } from 'src/app/shared/models/bill';
import { tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-paid-deals',
  templateUrl: './paid-deals.component.html',
  styleUrls: ['./paid-deals.component.css']
})
// C-Ngan
export class PaidDealsComponent implements OnInit {
 
  private paidDeals;
  private totalElements: number;
  private pageSize: number;
  private currentPage: number;

  private searchForm: FormGroup;
  private brands;
  private airports

  constructor(private router: Router,
              private billService : BillService,
              private fb: FormBuilder) { }

  ngOnInit() {
    
    this.searchForm = this.fb.group({

      billCode: ['', [Validators.required]],
      brand: ['', [Validators.required]],
      departure: ['', [Validators.required]],
      arrival: ['', [Validators.required]],      
    })
    this.getPage(1);
    this.billService.getSelectDto().subscribe(data =>{
        this.brands = data.brands
        this.airports = data.airports        
    });
  
  }


  getPage(page: number){  

     this.billService.getSearchedBillsByAccountId(1, page, this.searchForm).pipe(
      tap(res => {                    
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = page;
      }),
      map( res => res.content)
    ).subscribe(data =>{     
      this.paidDeals = data
    } );


  }

  search(){
    this.getPage(1);
  }
    
  openBillList(){
    this.router.navigateByUrl('/customer/bills')
  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paid-deals',
  templateUrl: './paid-deals.component.html',
  styleUrls: ['./paid-deals.component.css']
})
export class PaidDealsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openBillList(){
    this.router.navigateByUrl('/customer/bills')
  }

}

/**
 *  Created by: Toàn
 */
import {Component, OnInit} from '@angular/core';
import {IPayPalConfig} from 'ngx-paypal';

@Component({
  selector: 'app-customer-payment',
  templateUrl: './customer-payment.component.html',
  styleUrls: ['./customer-payment.component.css']
})
export class CustomerPaymentComponent implements OnInit {

  public payPalConfig ?: IPayPalConfig;

  constructor() {
  }

  ngOnInit() {
    this.initConfig();
  }

  private initConfig(): void {
    this.payPalConfig = {
      clientId: 'sb',
      style: {
        label: 'paypal',
        layout: 'vertical'
      }
    };
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { Transaction } from 'src/app/shared/models/transaction';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.css']
})
export class ReservationDetailComponent implements OnInit {

  private reservationCode: number;
  private mTransaction: Transaction;
  private mData: any;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.reservationCode = Number(this.route.snapshot.paramMap.get('id'));
    this.paymentService.getReservationDetails(this.reservationCode).subscribe(
      data => {
        console.log(data);
        this.mData = data;
        this.mTransaction = data[0].transaction;
      },
      error => console.log(error),
      () => console.log(this.mTransaction)
    );
  }

  get data() {
    return this.mData;
  }

  get transaction() {
    return this.mTransaction;
  }

  get flightSchedule() {
    return this.mTransaction.flightSchedule;
  }
}

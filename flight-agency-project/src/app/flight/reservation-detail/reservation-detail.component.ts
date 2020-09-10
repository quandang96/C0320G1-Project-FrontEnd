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
  transaction: Transaction;

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    this.reservationCode = Number(this.route.snapshot.paramMap.get('id'));
    this.paymentService.getReservation(this.reservationCode).subscribe(data => this.transaction = data);
  }

}

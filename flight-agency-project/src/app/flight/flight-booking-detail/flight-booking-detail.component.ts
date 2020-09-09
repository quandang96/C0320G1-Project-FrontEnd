import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FlightSchedule } from 'src/app/shared/models/flight-schedule';
import { FlightSearchDTO } from 'src/app/shared/models/dto/flight-search-dto';
import { TransactionService } from 'src/app/shared/services/transaction.service';

@Component({
  selector: 'app-flight-booking-detail',
  templateUrl: './flight-booking-detail.component.html',
  styleUrls: ['./flight-booking-detail.component.css']
})
export class FlightBookingDetailComponent implements OnInit {

  depPriceInfo: PriceInfo[] = [];
  retPriceInfo: PriceInfo[] = [];
  constructor(
    public modal: NgbActiveModal,
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.depPriceInfo = this.calcPrice(this.departureInfo.price);
    if (this.returnInfo != null)
      this.retPriceInfo = this.calcPrice(this.returnInfo.price);
  }

  calcPrice(price: number): PriceInfo[] {
    const info: PriceInfo[] = []
    //adult
    const adultPrice = this.setPriceInfo('Người lớn', this.bookingInfo.adults, price, 1);
    info.push(adultPrice);
    // children
    if (this.bookingInfo.children > 0) {
      const childrenPrice = this.setPriceInfo('Trẻ em', this.bookingInfo.children, price, 0.75);
      info.push(childrenPrice);
    }
    // babies
    if (this.bookingInfo.babies > 0) {
      const childrenPrice = this.setPriceInfo('Em bé', this.bookingInfo.babies, price, 0.1);
      info.push(childrenPrice);
    }
    return info;
  }

  setPriceInfo(type: string, quantity: number, price: number, discount: number): PriceInfo {
    let priceInfo = {} as PriceInfo;
    priceInfo.passengerType = type;
    priceInfo.quantity = quantity;
    priceInfo.netPrice = price * quantity * discount;
    priceInfo.tax = priceInfo.netPrice * 0.1;
    priceInfo.totalPrice = priceInfo.netPrice + priceInfo.tax;
    return priceInfo;
  }

  get departureInfo() {
    return this.transactionService.departureFlight;
  }

  get returnInfo() {
    return this.transactionService.returnFlight;
  }

  get bookingInfo() {
    return this.transactionService.bookingInfo;
  }

}

interface PriceInfo {
  passengerType: string;
  quantity: number;
  netPrice: number;
  tax: number;
  totalPrice: number;
}
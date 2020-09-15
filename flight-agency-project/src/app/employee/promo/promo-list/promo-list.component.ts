import { Component, OnInit } from '@angular/core';
import {PromoService} from '../../../shared/services/promo.service';
import {Observable} from 'rxjs';
import {Airport} from '../../../shared/models/airport';
import {Branch} from '../../../shared/models/branch';
import {Promo} from '../../../shared/models/promo';

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.css']
})
export class PromoListComponent implements OnInit {

  private promoList: Observable<Promo>;
  private airlineList: Observable<Branch>;
  private airportList: Observable<Airport>;

  constructor(
    public promoService: PromoService
  ) { }

  ngOnInit() {
    this.promoService.getPromo('not-active').subscribe(data => {
      this.promoList = data;
    });
    this.promoService.getAirlines().subscribe(data => {
      this.airlineList = data;
    });
    this.promoService.getAirports().subscribe(data => {
      this.airportList = data;
    });
    console.log('meo');
    console.log(this.promoList);
  }

  showPromoList(status: string) {
    this.promoService.getPromo(status).subscribe(data => {
      this.promoList = data;
    });
  }
}

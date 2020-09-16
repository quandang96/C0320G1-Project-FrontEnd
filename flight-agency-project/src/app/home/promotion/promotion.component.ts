import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FlightSchedule} from '../../shared/models/flight-schedule';
import {PromoSearchDto} from '../../shared/models/dto/promoSearchDto';
import {FormBuilder, FormGroup} from '@angular/forms';
import {map} from 'rxjs/operators';
import {PromoService} from '../../shared/services/promo.service';
import {FlightSearchDTO} from "../../shared/models/dto/flight-search-dto";


@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {


  constructor(
    public promoService: PromoService,
    private formBuilder: FormBuilder
  ) {
    console.log(this.branch);
    this.loadScripts();
    this.getToday();
  }
  promoList: Observable<FlightSchedule[]>;
  private searchFields: PromoSearchDto;
  private departure: string;
  private today: Date;
  private dd: string;
  private mm: string;
  private yyyy: string;
  private getday = '2020-10-02';
  // tslint:disable-next-line:max-line-length
  private branch: string[] = ['', '../../../assets/branches-image/vietjet.png', '../../../assets/branches-image/pacific.png', '../../../assets/branches-image/bamboo.png', '../../../assets/branches-image/vnairline.gif'];
  private i: number;
  private countday: string;
  private searchFormPromo: FormGroup;

  ngOnInit() {
    this.getPromo1(this.getday);
    this.searchFormPromo = this.formBuilder.group({
      departureAirport: [''],
      arrivalAirport: [''],
      departureDateTime: [''],
      arrivalDateTime: [''],
      babies: [''],
      children: [''],
      adults: ['']
    });
  }
  // loading script
  loadScripts() {
    const dynamicScripts = [
      '../../../assets/javascript/promotion.js'
    ];
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
  getPromo1(today1: string) {
    this.promoList = this.promoService.getAllFlightPromo(today1).pipe(
      map((data: FlightSchedule[]) => {
        console.log(data);
        if (data.length === 0) {
          document.getElementById('nodata').style.display = 'block' ;
          alert('Ngày ' + this.getday + ' Không có chuyến bay khuyến mãi !!!');
        } else {
          document.getElementById('nodata').style.display = 'none' ;
          console.log(data);
          return data;
        }
      })
    );
  }

  getToday() {
    this.today = new Date();
    this.dd = this.today.getDate().toString();
    this.mm = String(this.today.getMonth() + 1);
    if (parseFloat(this.mm) < 10) {
      this.mm = '0' + this.mm;
    }
    if (parseFloat(this.dd) < 10) {
      this.dd = '0' + this.dd;
    }
    this.yyyy = this.today.getFullYear().toString();
    this.getday = this.yyyy + '-' + this.mm + '-' + this.dd;
  }
  dayOfWeek(day: number) {
    this.today = new Date();
    this.mm = String(this.today.getMonth() + 1);
    if (parseFloat(this.mm) < 10) {
      this.mm = '0' + this.mm;
    }
    this.yyyy = this.today.getFullYear().toString();
    for (this.i = 0 ; this.i < day ; this.i ++) {
      this.dd = String(this.today.getDate() + this.i);
      if (parseFloat(this.dd) < 10) {
        this.dd = '0' + this.dd;
      }
      this.countday = this.yyyy + '-' + this.mm + '-' + this.dd;
    }
    this.getday = this.countday;
    this.ngOnInit();
  }

  promoSearch() {
    console.log(this.searchFormPromo.value);
    const search: FlightSearchDTO = {
      sortBy: '',
      departure: this.searchFormPromo.get('departureAirport').value,
      arrival: this.searchFormPromo.get('arrivalAirport').value,
      depDate: this.searchFormPromo.get('departureDateTime').value,
      babies: this.searchFormPromo.get('babies').value,
      children: this.searchFormPromo.get('children').value,
      adults: this.searchFormPromo.get('adults').value
    };
    console.log(search);
  }
}

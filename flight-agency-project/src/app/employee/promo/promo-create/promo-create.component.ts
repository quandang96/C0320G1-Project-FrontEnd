import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Branch } from '../../../shared/models/branch';
import { Airport } from '../../../shared/models/airport';
import { PromoService } from '../../../shared/services/promo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import {PROMO_INVALID_INPUT_WARNING} from '../../../shared/validations/valid-promo';

@Component({
  selector: 'app-promo-create',
  templateUrl: './promo-create.component.html',
  styleUrls: ['./promo-create.component.css']
})
export class PromoCreateComponent implements OnInit {

  private airlineList: Observable<Branch>;
  private airportList: Observable<Airport>;
  private createForm: FormGroup;
  // private error = PROMO_INVALID_INPUT_WARNING;

  constructor(
    public promoService: PromoService
  ) { }

  ngOnInit() {
    this.promoService.getAirlines().subscribe(data => {
      this.airlineList = data;
    });
    this.promoService.getAirports().subscribe(data => {
      this.airportList = data;
    });
    this.createForm = new FormGroup({
      namePromo: new FormControl('', [Validators.required, Validators.pattern('[ A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}')]),
      departurePlace: new FormControl('', Validators.required),
      arrivalPlace: new FormControl('', Validators.required),
      airline: new FormControl('', [Validators.min(1), Validators.pattern('[0-9]{1,}')]),
      discount: new FormControl('', [Validators.required, Validators.min(1), Validators.pattern('[0-9]{1,}')]),
    });
  }

}

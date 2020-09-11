import { Component, OnInit } from '@angular/core';
import { PromoService } from 'src/app/shared/services/promo.service';

@Component({
  selector: 'app-promo-delete',
  templateUrl: './promo-delete.component.html',
  styleUrls: ['./promo-delete.component.css']
})
export class PromoDeleteComponent implements OnInit {

  constructor(private promoService: PromoService) { }

  ngOnInit() {
  }

  deletePromo(id: number) {
    this.promoService.deletePromo(id).subscribe(
      (data) => {}
    );
  }

}

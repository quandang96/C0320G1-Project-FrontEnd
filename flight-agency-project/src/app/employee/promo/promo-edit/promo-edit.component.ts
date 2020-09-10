import { PromoService } from './../../../shared/services/promo.service';
import { PromoUpdateDto } from './../../../shared/models/dto/PromoUpdateDto';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';



function validateWhitespace(c: AbstractControl) {
  if (c.value != '') {
    const isWhitespace = c.value.trim().length === 0;
    if (isWhitespace) {
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    }
  }
}
function validateSpecialCharacters(c: AbstractControl) {
  const pattern = /[$&+,:;=?@#|'<>.^*()%!-]+/;
  return (c.value.match(pattern)) ? {
    containSpecialCharacters: true
  } : null
}

@Component({
  selector: 'app-promo-edit',
  templateUrl: './promo-edit.component.html',
  styleUrls: ['./promo-edit.component.css']
})
export class PromoEditComponent implements OnInit, AfterViewInit {

  public promoId;
  message = "";
  errorMessage = "";
  @ViewChild('focusCheck', { static: true }) private elementRef: ElementRef;
  promoForm: FormGroup;
  hideableDiv = false;
  promo: PromoUpdateDto = {
    id: null,
    promoName: null,
    discount: null,
    airline: null,
    departurePlace: null,
    arrivalPlace: null,
    flightDepartureDateStart: null,
    flightDepartureDateEnd: null,
    promoDateStart: null,
    promoDateEnd: null
  };
  constructor(private fb: FormBuilder,
    private promoService: PromoService,
    private router: Router,
    public activeRoute: ActivatedRoute) { }


  ngAfterViewInit(): void {
    this.elementRef.nativeElement.focus();
  }

  ngOnInit() {
    this.promoForm = this.fb.group({
      promoName: ['', [Validators.required, validateSpecialCharacters, validateWhitespace, Validators.maxLength(255)]],
      discount: ['', [Validators.required, Validators.max(1), Validators.min(0)]],
      airline: ['', [Validators.required, validateWhitespace]],
      departurePlace: ['', [Validators.required, validateWhitespace, validateSpecialCharacters]],
      arrivalPlace: ['', [Validators.required, validateWhitespace, validateSpecialCharacters]],
      flightDepartureDateStart: ['', [Validators.required,Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)]],
      flightDepartureDateEnd: ['', [Validators.required,Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)]],
      promoDateStart: ['', [Validators.required,Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)]],
      promoDateEnd: ['', [Validators.required,Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)]]
    });

    this.activeRoute.params.subscribe(data => {
      this.promoId = data.id;
      this.promoService.getPromoById(this.promoId).subscribe(data => {
        this.promoForm.patchValue(data);
      })
    })
  }
  updatePromo() {
    this.promoService.updatePromo(this.promoForm.value, this.promoId).subscribe(data => { },
      error => { this.errorMessage = "Cập nhật thất bại" }, () => {
        if (this.errorMessage.length <= 5) {
          this.message = "Cập nhật thành công";
        }
        this.ngOnInit();
      })

  }
  backToPromoList(){
    this.router.navigateByUrl("/employee/promo-list");
  }
}

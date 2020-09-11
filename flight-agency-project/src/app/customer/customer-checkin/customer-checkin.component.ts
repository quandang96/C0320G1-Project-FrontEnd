import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CustomerCheckinDto} from '../../shared/models/dto/CustomerCheckinDto';
import {NOTIFICATION_USER} from '../../shared/validations/passengerCheckin';
import {Observable} from 'rxjs';
import {TransactionDetailDTO} from '../../shared/models/dto/TransactionDetailDTO';
import {TransactionDetailSearchDto} from '../../shared/models/dto/TransactionDetailSearchDto';
import {CustomerService} from '../../shared/services/customer.service';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-customer-checkin',
  templateUrl: './customer-checkin.component.html',
  styleUrls: ['./customer-checkin.component.css']
})
export class CustomerCheckinComponent implements OnInit {
  private formSearchCustomer: FormGroup;
  transactionDetails: Observable<TransactionDetailDTO[]>;
  stt: number[] = [];
  currentPage: number;
  pageSize: number;
  totalElements: number;
  isEmpty = false;
  code: string;
  hideableDiv = false;
  errors = NOTIFICATION_USER;

  private searchFields: TransactionDetailSearchDto = {} as TransactionDetailSearchDto;

  constructor(
    public formBuilder: FormBuilder,
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.createCaptcha()
    this.formSearchCustomer = this.formBuilder.group({
      bookingCode: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,}$')]],
      surName: ['', [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}$')]],
      fullName: ['', [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}$')]],
      confirmCaptchaCode: ['', [Validators.required]]
    }, {validators: [ this.checkCaptchaCode.bind(this)]});
    this.getPage(1);
  }

  createCaptcha() {
    document.getElementById('captcha').innerHTML = '';
    const charsArray =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@';
    const lengthOtp = 5;
    const captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
      const index = Math.floor(Math.random() * charsArray.length + 1);
      if (captcha.indexOf(charsArray[index]) === -1) {
        captcha.push(charsArray[index]);
      } else {
        i--;
      }
    }
    const canv = document.createElement('canvas');
    canv.id = 'captcha';
    canv.width = 100;
    canv.height = 30;
    const ctx = canv.getContext('2d');
    ctx.font = '25px Georgia';
    ctx.strokeText(captcha.join(''), 0, 20);
    this.code = captcha.join('');
    document.getElementById('captcha').appendChild(canv);
  }

  checkCaptchaCode(formGroup: AbstractControl): ValidationErrors | null {
    const cap: CustomerCheckinDto = formGroup.value;
    const confirm = cap.confirmCaptchaCode;
    console.log(confirm);
    console.log(this.code);
    if (confirm !== this.code) {
      return {checkCaptchaCode: true};
    }
    return null;
  }

  get confirmCaptchaCode() {
    return this.formSearchCustomer.get('confirmCaptchaCode');
  }

  togglePass() {
    if (this.hideableDiv === true) {
      this.hideableDiv = false;
    } else {
      this.hideableDiv = true;
    }
  }

  getPage(pageNumber) {
    this.transactionDetails = this.customerService.searchTransactionDetail(this.searchFields, pageNumber).pipe(
      tap(res => {
        console.log(res);
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;

        this.stt = [];
        const firstIndex = this.pageSize * (this.currentPage - 1) + 1;
        const lastIndeex = this.pageSize * this.currentPage;
        for (let i = firstIndex; i <= lastIndeex; i++) {
          this.stt.push(i);
        }

        this.isEmpty = false;
        if (res.content.length == 0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log('vào được err của tap');
      }),
      map(res => res.content)
    );
  }

  search() {
    this.togglePass();
    this.searchFields = this.formSearchCustomer.value as TransactionDetailSearchDto;
    console.log(this.searchFields);
    this.getPage(1);
  }

}

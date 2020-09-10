import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {CustomerCheckinDto} from '../../shared/models/dto/CustomerCheckinDto';
import {NOTIFICATION_USER} from '../../shared/validations/passengerCheckin';

@Component({
  selector: 'app-customer-checkin',
  templateUrl: './customer-checkin.component.html',
  styleUrls: ['./customer-checkin.component.css']
})
export class CustomerCheckinComponent implements OnInit {
  private formSearchCustomer: FormGroup;
  code: string;
  captchaCode: string;
  errors = NOTIFICATION_USER;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formSearchCustomer = this.formBuilder.group({
      bookingCode: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,}$')]],
      surName: ['', [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}$')]],
      name: ['', [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}$')]],
      confirmCaptchaCode: ['', [Validators.required]]
    }, {validators: [ this.checkCaptchaCode.bind(this)]});
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
    if (confirm !== this.captchaCode) {
      return {checkCaptchaCode: true};
    }
    return null;
  }

  get confirmCaptchaCode() {
    return this.formSearchCustomer.get('confirmCaptchaCode');
  }

}

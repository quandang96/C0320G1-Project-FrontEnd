import { BillService } from './../../shared/services/bills.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup ,FormBuilder,Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {BillSearchFields} from '../../shared/models/billSearchField';
import { ReCaptchaV3Service } from 'ngx-captcha';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-bill-find',
  templateUrl: './bill-find.component.html',
  styleUrls: ['./bill-find.component.css']
})
export class BillFindComponent implements OnInit {
  captchaCode: string;
  formSearchBills: FormGroup;
  private searchFields: BillSearchFields = {} as BillSearchFields;
  currentPage: number;
  pageSize: number;
  totalElements: number;
  stt: number[] = [];
  isEmpty = false;
  private list;
  private billsList;
   billsListSearch;
  constructor(
    private billService: BillService,
    private reCaptchaV3Service: ReCaptchaV3Service,
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<BillFindComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  


  ngOnInit() {
    this.billsList = this.data
    this.formSearchBills = this.formBuilder.group({
      confirmCaptchaCode: ['', [Validators.required]],
      billCode: [''],
      billTax:[''],
      name:['']
    })
  }

  createCaptcha() {
    document.getElementById('captcha').innerHTML = '';
    // tslint:disable-next-line:prefer-const
    let charsArray =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@';
    const lengthOtp = 5;
    const captcha = [];
    for (let i = 0; i < lengthOtp; i++) {
      const index = Math.floor(Math.random() * charsArray.length + 1); // get the next character from the array
      if (captcha.indexOf(charsArray[index]) === -1) {
        captcha.push(charsArray[index]);
      } else {
        i--;
      }
    }
    const canv = document.createElement('canvas');
    canv.id = 'captcha';
    canv.width = 100;
    canv.height = 40;
    const ctx = canv.getContext('2d');
    ctx.font = '25px Georgia';
    ctx.strokeText(captcha.join(''), 0, 30);
    // storing captcha so that can validate you can save it somewhere else according to your specific requirements
    this.captchaCode = captcha.join('');
    document.getElementById('captcha').appendChild(canv); // adds the canvas to the body element
  }

  checkCaptchaCode(formGroup: AbstractControl): ValidationErrors | null {
    // const cap: UserDto = formGroup.value;
    const confirm = null;
    if (confirm !== this.captchaCode) {
      return {checkCaptchaCode: true};
    }
    return null;
  
  }
  get confirmCaptchaCode() {
    return this.formSearchBills.get('confirmCaptchaCode');
  }



  searchBills(){
    this.searchFields = this.formSearchBills.value as BillSearchFields;
    console.log(this.searchFields);
    this.getPage(1);
  }

  getPage(pageNumber) {
    this.billsListSearch = this.billService.getBillsListSearch(this.searchFields, pageNumber).pipe(
      tap(res => {
        console.log("123")
        console.log(res);
        console.log("456")
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;
        this.billsList = res.content;
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
    console.log(this.billsListSearch)
  }

}

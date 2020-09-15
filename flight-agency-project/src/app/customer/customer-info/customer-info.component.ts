import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../shared/services/customer.service';
import {CustomerUpdateDto} from '../../shared/models/dto/CustomerUpdateDto';
// Created By Thiện - validate khoảng trắng
function validateWhitespace(c: AbstractControl) {
  if (c.value !== '') {
    const isWhitespace = c.value.trim().length === 0;
    if (isWhitespace) {
      const isValid = !isWhitespace;
      return isValid ? null : { whitespace: true };
    }
  }
}
// Created By Thiện - validate kí tự đặc biệt
function validateSpecialCharacters(c: AbstractControl) {
  const pattern = /[$&+,:;=?@#|'<>.^*()%!-]+/;
  return (c.value.match(pattern)) ? {
    containSpecialCharacters : true
  } : null;
}

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  infoForm: FormGroup;


  customer: CustomerUpdateDto = {
    id: null,
    fullName: null,
    email: null,
    birthday: null,
    phoneNumber: null,
    gender: null,
    address: null,
    avatarImageUrl: null,
    rank: null,
    backendMessage: null
  };
  backendMessages: string[];
  message = '';
  errorMessage = '';


  private avatarUrl = 'https://www.w3schools.com/howto/img_avatar.png';

  constructor(private fb: FormBuilder,
              private customerService: CustomerService) {
  }

  ngOnInit() {
    // Created By Thiện - form thông ton khách hàng
    this.infoForm = this.fb.group({
      fullName: ['', [Validators.required, validateWhitespace, validateSpecialCharacters,
        Validators.maxLength(30), Validators.minLength(10)]],
      email: [''],
      birthday: ['', [Validators.required, Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
        this.customerService.validateBirthday]],
      phoneNumber: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.maxLength(60)]],
      avatarImageUrl: [''],
      rank: ['']
    });

    // Created By Thiện - Hiển thị thông tin khách hàng
    this.customer.id = 2;
    this.customerService.getCustomerById(this.customer.id).subscribe(data => {
      this.avatarUrl = data.avatarImageUrl;
      this.infoForm.patchValue(data);
    }, error => {
      this.errorMessage = 'Lỗi!! Không tìm thấy tài khoản của bạn';
    });
  }

  // Created By Thiện - Chỉnh sửa thông tin khách hàng
  updateCustomer() {
    this.errorMessage = '';
    this.message = '';
    this.customer = this.infoForm.value;
    this.customer.id = 2;
    this.customerService.updateCustomer(this.customer, 2).subscribe(data => {
      this.backendMessages = data.backendMessage;
    }, error => {
      this.errorMessage = 'Cập nhật tài khoản thất bại';
    }, () => {
      if (this.backendMessages.length === 0) {
        this.message = 'Thông tin tài khoản của bạn đã được cập nhật';
      }
      this.ngOnInit();
    });
  }
}

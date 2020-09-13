import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdminPasswordDTO} from '../../shared/models/dto/AdminPasswordDTO';
import {AccountService} from '../../shared/services/AccountService';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordForm: FormGroup;

  admin: AdminPasswordDTO = {
    id: null,
    password: null,
    newPassword: null,
    confirmPassword: null,
    backendMessage: null
  };

  message = '';

  constructor(private fb: FormBuilder,
              private accountService: AccountService
  ) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['']
    }, {validators: [this.accountService.comparePassword]});
  }

  updatePassword() {
    this.admin.id = 10;
    this.admin.password = this.passwordForm.get('password').value;
    this.admin.newPassword = this.passwordForm.get('newPassword').value;
    this.admin.confirmPassword = this.passwordForm.get('confirmPassword').value;
    this.admin.backendMessage = '';

    console.log(this.admin, this.admin.id);
    this.accountService.updatePassword(this.admin, this.admin.id).subscribe(data => {
      this.message = data.backendMessages;
      if (this.message === '' ) {
        this.message = 'Đổi mật khẩu thành công';
      } else {
        this.message = 'Đổi mật khấu thất bại';
      }
      this.ngOnInit();
    });
  }
}

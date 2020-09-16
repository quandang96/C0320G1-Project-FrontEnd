import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AccountService} from '../shared/services/AccountService';
import {Account} from '../shared/models/Account';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';


function datePickerValidator(control: AbstractControl): ValidationErrors | null {
  const dated = new Date(control.value);
  const timeBirth: number = dated.getTime();
  const now = new Date().getTime();
  if (((now - timeBirth) / 365.25 / 24 / 60 / 60 / 1000) < 18) {
    return {invalidDOBYear: true};
  }
  return null;
}
// function checkPassword(formGroup: AbstractControl): ValidationErrors | null {
//   const account: Account = formGroup.value;
//   const password = account.password;
//   const confirmPassword = account.confirmPassword;
//   if (password !== confirmPassword) {
//     return {checkPassword: true};
//   }
//   return null;
// }


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    ) {}

  private account: Account = {
    id: null,
    code: null,
    fullName: null,
    password: null,
    birthDate: null,
    email: null,
    phoneNumber: null,
    address: null,
    gender: null,
    customerRank: null,
    avatarImageUrl: null,
    role: null,
    status: null,
  };
  registerForm: FormGroup;


  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      birthDate: ['', [Validators.required, datePickerValidator]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^((09|03|07|08|05)+([0-9]{8})\b)$/)]],
      confirmPassword: ['', [Validators.required]],
      address: ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/)]],
      gender: ['', [Validators.required]],
    }, { validator: this.MatchPassword('password', 'confirmPassword'), });
  }
  onAddNewAccount() {
    // this.submitted = true;
    // this.account.fullName = this.registerForm.get('fullName').value;
    // this.account.password = this.registerForm.get('password').value;
    // this.account.birthDate = this.registerForm.get('birthDate').value;
    // this.account.email = this.registerForm.get('email').value;
    // this.account.phoneNumber = this.registerForm.get('phoneNumber').value;
    // this.account.address = this.registerForm.get('address').value;
    // this.account.gender = this.registerForm.get('gender').value;
    // this.account.status = false;
    // this.account.customerRank = '';
    // this.account.avatarImageUrl = '';
    // this.account.role = 'ROLE_USER';
    // this.account.code = '';
    //
    // console.log(this.account);
    //
    // this.accountService.createUser(this.account).subscribe(data => {
    //   // this.router.navigateByUrl('');
    //   console.log('success');
    // });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    this.submitted = true;
    this.account.fullName = this.registerForm.get('fullName').value;
    this.account.password = this.registerForm.get('password').value;
    this.account.birthDate = this.registerForm.get('birthDate').value;
    this.account.email = this.registerForm.get('email').value;
    this.account.phoneNumber = this.registerForm.get('phoneNumber').value;
    this.account.address = this.registerForm.get('address').value;
    this.account.gender = this.registerForm.get('gender').value;
    this.account.status = false;
    this.account.customerRank = '';
    this.account.avatarImageUrl = '';
    this.account.role = 'ROLE_USER';
    this.account.code = '';

    // console.table(this.registerForm.value);
    console.table(this.account);

    this.accountService.createUser(this.account).subscribe(data => {
    });
  }
}

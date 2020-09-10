import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {EmployeeService} from '../../shared/services/employee.service';
import {employeeDto} from '../../shared/models/dto/employeeDto';

function validateWhitespace(c: AbstractControl) {
  if (c.value !== '') {
    const isWhitespace = c.value.trim().length === 0;
    if (isWhitespace) {
      const isValid = !isWhitespace;
      return isValid ? null : {whitespace: true};
    }
  }
}

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
export class EmployeeInformationComponent implements OnInit {
  infoForm: FormGroup;
  employee: employeeDto = {
    id: null,
    fullName: null,
    email: null,
    birthDate: null,
    phoneNumber: null,
    gender: null,
    address: null,
    avatarUrl: null,
    password: null,
    newPassword: null,
    confirmPassword: null,
    backendMessage: null
  };
  backendMessages: string[];
  message = '';
  errorMessage = '';
  private avatarUrl = '';
  changePassForm: FormGroup;

  constructor(private fb: FormBuilder,
              private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.changePassForm = this.fb.group({
        password: ['', [validateWhitespace]],
        newPassword: ['', [Validators.minLength(6), Validators.maxLength(20), validateWhitespace]],
        confirmPassword: ['', [Validators.minLength(6), Validators.maxLength(20), validateWhitespace]]
    }, {validators: checkPassword});
    this.infoForm = this.fb.group({
      fullName: [''],
      email: [''],
      birthday: [''],
      phoneNumber: [''],
      gender: [''],
      address: [''],
      avatarUrl: [''],
    });
    this.employee.id = 1;
    this.employeeService.getEmployeeById(this.employee.id).subscribe(data => {
      this.avatarUrl = data.avatarUrl;
      if (this.avatarUrl == null) {
        if (data.gender === 'nam' || data.gender === 'Nam') {
          this.avatarUrl = 'https://www.w3schools.com/howto/img_avatar.png';
        } else {
          this.avatarUrl = 'https://www.w3schools.com/w3images/avatar6.png';
        }
      }
      this.infoForm.patchValue(data);
    }, error => {
      this.errorMessage = 'Lỗi!! Không tìm thấy tài khoản của bạn';
    });
  }

  changePassword() {
    this.errorMessage = '';
    this.message = '';
    this.employee = this.infoForm.value;
    this.employee.password = this.changePassForm.get('password').value;
    this.employee.newPassword = this.changePassForm.get('newPassword').value;
    this.employee.confirmPassword = this.changePassForm.get('confirmPassword').value;
    this.employee.id = 1;
    this.employeeService.changePassword(this.employee, this.employee.id).subscribe(data => {
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
function checkPassword(formGroup: AbstractControl): ValidationErrors | null {
  const pass: employeeDto = formGroup.value;
  const password = pass.newPassword;
  const confirmPassword = pass.confirmPassword;
  if (password !== confirmPassword) {
    return { checkPassword: true };
  }
  return null;
}

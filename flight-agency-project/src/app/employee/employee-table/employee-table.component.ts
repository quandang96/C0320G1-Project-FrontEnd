import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmployeeDTO} from '../../shared/models/dto/employeeDTO';
import {EmployeeService} from '../../shared/services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as xlsx from 'xlsx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
  @ViewChild('epltable', {static: false}) epltable: ElementRef;
  employees: EmployeeDTO[];
  employee: EmployeeDTO;
  page = 0;
  size = 10;
  valueSearch = '';
  totalPage = 1;
  totalItems = 1;
  searchObj = {
    key: '',
    value: '',
    size: '',
    page: '',
  };
  searchEmployeeForm: FormGroup;
  addNewEmployeeForm: FormGroup;

  // B-HoangLong
  private flag = -1;
  private checkEdit = false;
  private editEmployeeForm: FormGroup;
  private employeeEditId: number;

  constructor(
    private employeeService: EmployeeService,
    private  formBuilder: FormBuilder,
    //B-HoangLong
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.getAllEmployee(0, 10);
    this.searchEmployeeForm = this.formBuilder.group(
      {
        key: ['', [Validators.required]],
        size: ['', [Validators.required]],
        page: ['', [Validators.required]],
        value: ['', [Validators.required]]
      }
    );
    this.addNewEmployeeForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, Validators.pattern(/^([A-Z])[a-z]+[[\ ][A-Z][a-z]+]*$/)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^(090|091|([\(][\+]84[\)]90)|([\(][\+]84[\)]91))[0-9]{7}$/)]],
        address: ['', [Validators.required]],
        birthday: ['', [Validators.required]],
        avatarImageUrl: ['', [Validators.required]],
        id: ['']
      }
    );
    this.editEmployeeForm = this.addNewEmployeeForm;
  }

  getAllEmployee(page, size) {
    if (page == null) {
      page = 0;
    }
    if (size == null) {
      size = 10;
    }
    this.employeeService.getAllEmployee(page, size).subscribe(data => {
        console.log(data);
        this.totalPage = data.totalPages;
        this.totalItems = data.totalItems;
        this.page = data.currentPage;
        this.employees = data.body;
      }, error => {
        console.log('Get Data Thất Bại ');
      }, () => {
        console.log('Get Data Thành Công');
      }
    );
  }

  exportToExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.epltable.nativeElement);
    const wb: xlsx.WorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Sheet1');
    xlsx.writeFile(wb, 'epltable.xlsx');
  }

  searchEmployee() {
    this.searchObj = this.searchEmployeeForm.value;
    console.log(this.searchObj);
    // tslint:disable-next-line:max-line-length
    this.employeeService.searchEmployees(this.searchObj.key, this.searchObj.value, this.page, this.size).subscribe(data => {
        console.log('data trả về ' + data);
        this.employees = data.body;
        this.totalPage = data.totalPages;
        this.page = data.currentPage;
        this.totalItems = data.totalItems;
      }, error => {
        console.log('Get Data Thất Bại ');
      }, () => {
        console.log('Search thành công ,Get Data Thành Công');
      }
    );
  }

  onFirstPage() {
    if (this.valueSearch != null) {
      this.searchEmployee();
    }
    this.page = 0;
    this.getAllEmployee(this.page, this.size);
  }

  onLastPage() {
    if (this.valueSearch != null) {
      this.page = this.totalPage - 1;
      this.searchEmployee();
    }
    this.page = this.totalPage - 1;
    this.getAllEmployee(this.page, this.size);
  }

  onBackPage() {
    // tslint:disable-next-line:triple-equals
    if (this.valueSearch != '') {
      if (this.page > 0) {
        this.page--;
      }
      this.searchEmployee();
    }
    // tslint:disable-next-line:triple-equals
    if (this.page != 0) {
      this.page--;
      this.getAllEmployee(this.page, this.size);
    }
  }

  onNextPage() {
    // tslint:disable-next-line:triple-equals
    if (this.valueSearch != '') {
      this.page++;
      this.searchEmployee();
    }
    // tslint:disable-next-line:triple-equals
    if (this.page != this.totalPage - 1) {
      this.page++;
      this.getAllEmployee(this.page, this.size);
    }

  }

  onChangeSize() {
    if (this.valueSearch != null) {
      this.searchEmployee();
    }
    // @ts-ignore
    this.getAllEmployee(this.page, this.size);
    console.log('load lại trang , size : ' + this.size);
  }

  //B-HoangLong
  checkEditEmployee(id) {
    if (!this.checkEdit) {
      this.checkEdit = !this.checkEdit;
      this.flag = id;
      this.employeeEditId = id;
      this.employeeService.getEmployeeEditById(this.employeeEditId).subscribe(data => {
        this.editEmployeeForm.patchValue(data);
        console.log(this.editEmployeeForm);
      });
    }
    if (this.flag > 0) {
      this.flag = id;
      this.employeeEditId = id;
      this.employeeService.getEmployeeEditById(this.employeeEditId).subscribe(data => {
        this.editEmployeeForm.patchValue(data);
        console.log(this.editEmployeeForm);
      });
    }
  }

  editEmployee() {
    this.employeeService.update(this.editEmployeeForm.value, this.employeeEditId).subscribe(data => {
      // this.employeeService.showNotification('', 'Sửa thành công, chúc mừng bạn');
      this.flag = -1;
      this.checkEdit = false;
      this.getAllEmployee(this.page, this.size );
    });
  }

  close() {
    this.redirectTo('employee/table');
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl( '/', {skipLocationChange: true}).then(() =>
      this.router.navigate([uri]));
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      this.getAllEmployee(this.page, this.size );
      console.log(id);
    });
  }
}

import {Component, OnInit} from '@angular/core';
import {EmployeeDTO} from '../../shared/models/dto/employeeDTO';
import {EmployeeService} from '../../shared/services/employee.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {
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

  constructor(
    private employeeService: EmployeeService,
    private  formBuilder: FormBuilder
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

  ExportTOExcel() {
    console.log('to excel');
    // @ts-ignore
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.TABLE.nativeElement);
    // @ts-ignore
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    // @ts-ignore
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    // @ts-ignore
    XLSX.writeFile(wb, 'ScoreSheet.xlsx');
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
    this.page = 0;
    // if (this.valueSearch != null) {
    //   this.searchEmployee();
    // }
    this.getAllEmployee(this.page, this.size);
  }

  onLastPage() {
    this.page = this.totalPage - 1;
    // if (this.valueSearch != null) {
    //   this.searchEmployee();
    // }
    this.getAllEmployee(this.page, this.size);
  }

  onBackPage() {
    // // tslint:disable-next-line:triple-equals
    // if (this.valueSearch != null) {
    //   this.searchEmployee();
    // }
    // tslint:disable-next-line:triple-equals
    if (this.page != 0) {
      this.page--;
      this.getAllEmployee(this.page, this.size);
    }
  }

  onNextPage() {
    // if (this.valueSearch != null) {
    //   this.searchEmployee();
    // }
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
}

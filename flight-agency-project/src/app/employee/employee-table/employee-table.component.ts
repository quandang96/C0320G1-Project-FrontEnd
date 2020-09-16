import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmployeeDTO} from '../../shared/models/dto/employeeDTO';
import {EmployeeService} from '../../shared/services/employee.service';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as xlsx from 'xlsx';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';

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
  size = 5;
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
  addNewForm = this.fb.group({
    aliases: this.fb.array(
      [this.fb.group({
        fullName: ['', [Validators.required, Validators.pattern(/^([A-Z])[a-z]+[[\ ][A-Z][a-z]+]*$/)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^(090|091|([\(][\+]84[\)]90)|([\(][\+]84[\)]91))[0-9]{7}$/)]],
        address: ['', [Validators.required]],
        birthday: ['', [Validators.required]],
        avatarImageUrl: ['', [Validators.required]],
        id: ['']
      })]
    )
  });
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadURL: Observable<string>;
  uploadProgress: Observable<number>;
  url: string;
  statusAdd = true;

  constructor(
    private employeeService: EmployeeService,
    private afStorage: AngularFireStorage,
    private  fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.getAllEmployee(0, 5);
    this.searchEmployeeForm = this.fb.group(
      {
        key: ['', [Validators.required]],
        size: ['', [Validators.required]],
        page: ['', [Validators.required]],
        value: ['', [Validators.required]]
      }
    );
    this.addNewEmployeeForm = this.fb.group(
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

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    this.downloadURL = this.ref.getDownloadURL();
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.url = url; // <-- do what ever you want with the url..
        });
      })
    ).subscribe();
  }

  get aliases() {
    return this.addNewForm.get('aliases') as FormArray;
  }

  addAlias() {
    // tslint:disable-next-line:triple-equals
    if (this.statusAdd == false) {
      this.aliases.push(this.fb.group({
        fullName: [''],
        email: [''],
        phoneNumber: [''],
        address: [''],
        birthday: [''],
        avatarImageUrl: [''],
        id: ['']
      }));
      console.log('add row');
    }
    this.statusAdd = false;
  }

  clearAlias() {
    // tslint:disable-next-line:triple-equals
    this.aliases.removeAt(this.aliases.length - 1);
    // tslint:disable-next-line:triple-equals
    if (this.aliases.length == 0) {
      this.getAllEmployee(0, 5);
    }
  }

  getAllEmployee(page, size) {
    if (page == null) {
      page = 0;
    }
    if (size == null) {
      size = 5;
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

  onSubmit() {
    console.warn(this.addNewForm.value);
    this.employees = this.addNewForm.value.aliases;
    this.employeeService.addNewEmployees(this.employees).subscribe(data => {
      console.log('bắt đầu save ' + data);
    }, error => {
      console.log('Save Thất Bại ');
    }, () => {
      console.log('Save Thành Công');
      this.getAllEmployee(0, 5);
    });
    this.statusAdd = true;
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

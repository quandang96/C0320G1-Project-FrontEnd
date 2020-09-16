import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AccountService} from '../../shared/services/AccountService';
import {AdminInfoDTO} from '../../shared/models/dto/AdminInfoDTO';
import {TokenStorageService} from '../../shared/services/TokenStorageService';


// @ts-ignore
@Component({
  selector: 'app-admin-info',
  templateUrl: './admin-info.component.html',
  styleUrls: ['./admin-info.component.css']
})
export class AdminInfoComponent implements OnInit {
  infoForm: FormGroup;


  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private tokenStorageService: TokenStorageService
  ) { }

  private admin: AdminInfoDTO = {
    id: null,
    fullName: null,
    birthday: null,
    gender: null,
    email: null,
    address: null,
    phoneNumber: null,
    avatarImageUrl: null,
    backendMessage: null
  };
  ngOnInit() {
    this.admin.id = this.tokenStorageService.getJwtResponse().accountId;
    this.infoForm = this.fb.group({
      fullName: [''],
      birthday: [''],
      gender: [''],
      email: [''],
      address: [''],
      phoneNumber: [''],
      avatarImageUrl: [''],
    });
    this.accountService.getAdminById(this.admin.id).subscribe(data => {
      this.infoForm.patchValue(data);
    });
  }
}

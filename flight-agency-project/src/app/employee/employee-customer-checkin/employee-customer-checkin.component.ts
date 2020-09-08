import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-customer-checkin',
  templateUrl: './employee-customer-checkin.component.html',
  styleUrls: ['./employee-customer-checkin.component.css']
})
export class EmployeeCustomerCheckinComponent implements OnInit {
  private formSearchCustomerCheckin: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formSearchCustomerCheckin = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^[A-ZẮẰẲẴẶĂẤẦẨẪẬÂÁÀÃẢẠĐẾỀỂỄỆÊÉÈẺẼẸÍÌỈĨỊỐỒỔỖỘÔỚỜỞỠỢƠÓÒÕỎỌỨỪỬỮỰƯÚÙỦŨỤÝỲỶỸỴa-zắằẳẵặăấầẩẫậâáàãảạđếềểễệêéèẻẽẹíìỉĩịốồổỗộôớờởỡợơóòõỏọứừửữựưúùủũụýỳỷỹỵ]{1,}$')]],
      address: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]{1,}$')]]
    });
  }

}

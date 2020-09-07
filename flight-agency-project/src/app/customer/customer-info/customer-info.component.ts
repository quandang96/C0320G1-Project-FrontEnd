import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  constructor() {
    $('#basicModal').modal({show: false, backdrop: 'static'});
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

declare var $: any
@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  $(document).ready(function(){
      $("#checkAll").click(function () {
          $('input:checkbox').not(this).prop('checked', this.checked);
      }); 
  });
  
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invoice-ticket',
  templateUrl: './invoice-ticket.component.html',
  styleUrls: ['./invoice-ticket.component.css']
})
export class InvoiceTicketComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data=>{
      
    })
  }

}

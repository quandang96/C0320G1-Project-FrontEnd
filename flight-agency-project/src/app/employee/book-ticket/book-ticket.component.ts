import { Component, OnInit } from '@angular/core';
import {Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent implements OnInit {
  flight: object = null;
  constructor(private router: Router) {
   
   }

  ngOnInit() {

  }
 
 
}

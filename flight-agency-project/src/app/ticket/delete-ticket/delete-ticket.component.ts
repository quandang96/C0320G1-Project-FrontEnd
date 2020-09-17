import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {TicketServiceService} from '../../shared/services/ticket-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.css']
})
export class DeleteTicketComponent implements OnInit {
  name;
  bookingCode;
  airline;
  id;
  flight = 'aa';


  constructor(
    public dialogRef: MatDialogRef<DeleteTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ticketService: TicketServiceService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.name = this.data.data1.passenger.fullName;
    this.id = this.data.data1.id;
    this.bookingCode = this.data.data1.transaction.flightSchedule.flightCode;
    this.airline = this.data.data1.transaction.flightSchedule.branch.name;

  }

  delete(id: any) {
    this.ticketService.deleteTicket(this.id).subscribe(data => {
      this.route.navigateByUrl('tickets');
    });
  }

}

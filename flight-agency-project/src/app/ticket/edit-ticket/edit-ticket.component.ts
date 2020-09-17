import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {TicketServiceService} from '../../shared/services/ticket-service.service';
import {Router} from '@angular/router';
import {AlterComponent} from '../alter/alter.component';
import {PassengerInfoDTO} from '../../shared/models/passenger';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  private formEditTicket: FormGroup;
  private totalMoney;
  private flight;
  private departure;
  private bookingCode;
  private airline;
  private idEdit ;

  constructor(
    public dialogRef: MatDialogRef<EditTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ticketService: TicketServiceService,
    private route: Router,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router,
    ) { }

  ngOnInit() {
    this.formEditTicket = this.formBuilder.group({
      // tslint:disable-next-line:max-line-length
      name: [this.data.data1.passenger.fullName, [Validators.required, Validators.pattern('(^[AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*$)|(^[AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*[\\ ][AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*$)|(^[AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*[\\ ][AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*[\\ ][AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*$)|(^[AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*[\\ ][AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*[\\ ][AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*[\\ ][AẢÀÃÁẠĂẰẲẴẮẶÂẨẦẪẤẬBCDĐEÈẺẼÉẸÊỀỂỄẾỆFGHIỈÌĨÍỊJKLMNOỎÒÕÓỌÔỒỖỔỘỐƠỜỠỞỢỚPQRSTUÚỦŨỤÙƯỨỬỮỪỰVWXYỲỶỸÝỴZ][aàảãáạăằẳẵắặâầẩẫấậbcdđeèẻẽéẹêềểễếệfghiìỉĩíịjklmnoòỏõóọôồổỗốộơờởỡớợpqrstuùủũúụưừửữứựvwxyỳỷỹýỵz]*$)')]],
      email: [this.data.data1.passenger.email, [Validators.required, Validators.pattern('^[\\w]+[\\@][a-z]+[\\.][a-z]+$')]],
    });
    this.idEdit = this.data.data1.id;
    this.bookingCode = this.data.data1.transaction.flightSchedule.flightCode;
    this.departure = this.data.data1.transaction.flightSchedule.departureDateTime;
    this.airline = this.data.data1.transaction.flightSchedule.branch.name;
    // tslint:disable-next-line:max-line-length
    this.flight = this.data.data1.transaction.flightSchedule.departureAirport.city + ' - ' + this.data.data1.transaction.flightSchedule.arrivalAirport.city;
  }

  submitEdit() {
    this.ticketService.updateTicket(this.idEdit, this.formEditTicket.value).subscribe((data: PassengerInfoDTO) => {
      // tslint:disable-next-line:triple-equals max-line-length
      if (this.data.data1.passenger.fullName == this.formEditTicket.controls.name && this.data.data1.passenger.email == this.formEditTicket.controls.email ) {
        this.back();
      } else { const dialogRef = this.dialog.open(AlterComponent, {
          width: '412px',
          height: '121px',
          data: {ticket: data},
          autoFocus: false
        });
               dialogRef.afterClosed().subscribe(result => {
               this.back();
        });
      }
    });
  }

  back() {
    this.route.navigateByUrl('employee/tickets');
  }
}
